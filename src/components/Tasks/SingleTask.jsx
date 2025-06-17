import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAxiosUrl from '../hooks/useAxiosUrl';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { useDrag } from 'react-dnd';

const SingleTask = ({ todo }) => {


    const { setCallFetch, setOpenUpdateTask, setSingleTodo } = useAuth();

    // Drag Container 
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
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
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
                }
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    // Deadline Formate for show card 
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
            <h3><span className='text-blue-600 font-semibold'>Title:</span> <br /> {todo.todoTitle}</h3>
            <p className='mb-2 mt-2'><span className='text-amber-500 font-semibold'>Description:</span> <br /> {todo.todoDescription}</p>
            <h3><span className='text-blue-600 font-semibold'>Deadline:</span> {dateTimeFormated}</h3>

            <div className='flex justify-between items-center mb-2 mt-3'>
                {
                    todo.todoStatus === "done" ? <span className='bg-green-300 px-2 py-1 rounded-lg'>Completed</span> : <div>
                        {/* edit button  */}
                        <button onClick={() => handleEditTodoItem(todo._id)} type='button' className='bg-[#950CF5] p-1 rounded-2xl text-white text-lg cursor-pointer'><FaEdit /></button>
                        {/* delete button  */}
                        <button onClick={() => handleDeleteTodoItem(todo._id)} type='button' className='ml-3 bg-[#00AC41] p-1 rounded-2xl text-white text-lg cursor-pointer'>
                            <MdDeleteForever />
                        </button>
                    </div>
                }
                <p className='mt-2'><span className='text-amber-500 font-semibold'>Status: </span>{todo.todoPriority}</p>
            </div>
        </div>
    );
};

export default SingleTask;