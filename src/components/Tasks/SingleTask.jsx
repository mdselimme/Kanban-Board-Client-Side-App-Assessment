import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAxiosUrl from '../hooks/useAxiosUrl';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const SingleTask = ({ todo }) => {

    const { setCallFetch } = useAuth();

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

    // Edit Item From Todos 
    const handleEditTodoItem = async (todoId) => {
        console.log(todoId)
    }

    return (
        <div className='bg-white my-4 p-4 rounded-2xl cursor-grab'>
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
            <h3>Deadline: {todo.todoDeadline}</h3>
            <p className='text-end mt-2'>{todo.todoPriority}</p>
        </div>
    );
};

export default SingleTask;