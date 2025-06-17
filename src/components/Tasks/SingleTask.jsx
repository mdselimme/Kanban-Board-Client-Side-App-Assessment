import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAxiosUrl from '../hooks/useAxiosUrl';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { useDrag } from 'react-dnd';

const SingleTask = ({ todo }) => {


    const { setCallFetch, setOpenUpdateTask, setSingleTodo } = useAuth();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "todo",
        item: { id: todo._id, status: todo.todoStatus },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    // DeleteItem From Todos 
    const handleDeleteTodoItem = async (todoId) => {
        try {
            const response = await useAxiosUrl.delete(`/todos/delete/${todoId}`);
            const data = await response.data;
            if (data.success) {
                setCallFetch(true);
                Swal.fire({
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            };
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const deadline = new Date(todo.todoDeadline);
    const dateTimeFormated = deadline.toLocaleString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    // Edit Item From Todos 
    const handleEditTodoItem = async (todoId) => {
        try {
            const resp = await useAxiosUrl.get(`/todos/todo/${todoId}`);
            const response = await resp.data;
            setSingleTodo(response);
            setOpenUpdateTask(true);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <div ref={drag} className={`${isDragging ? "bg-slate-100 opacity-50" : "bg-white"} my-4 p-4 rounded-2xl cursor-grab`}>
            <div className='flex justify-between items-center mb-2'>
                <h1>{todo.todoTitle}</h1>
                <div>
                    {/* edit button  */}
                    <button onClick={() => handleEditTodoItem(todo._id)} type='button' className='bg-[#950CF5] p-1 rounded-2xl text-white text-lg cursor-pointer'><FaEdit /></button>
                    {/* delete button  */}
                    <button onClick={() => handleDeleteTodoItem(todo._id)} type='button' className='ml-3 bg-[#00AC41] p-1 rounded-2xl text-white text-lg cursor-pointer'>
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
            <h1 className='mb-2'>{todo.todoDescription}</h1>
            <h3>Deadline: {dateTimeFormated}</h3>
            <p className='text-end mt-2'>{todo.todoPriority}</p>
        </div>
    );
};

export default SingleTask;