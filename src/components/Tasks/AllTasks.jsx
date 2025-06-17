import React from 'react';
import { useDrop } from 'react-dnd';
import SingleTask from './SingleTask';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosUrl from '../hooks/useAxiosUrl';

const AllTasks = ({ todoStatus, categorized }) => {

    const { setCallFetch } = useAuth();

    console.log(categorized)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todo",
        drop: (item) => addTodoWhereIsDropping(item.id),
        collect: (monitor) => ({
            isOver: !monitor.isOver()
        })
    }));

    const addTodoWhereIsDropping = async (id) => {
        console.log(id, isOver, todoStatus)
        try {
            console.log(id)
            const res = await useAxiosUrl.patch(`/todos/update-status/${id}`, { todoStatus });
            const response = await res.data;
            console.log(response)
            if (response.success) {
                setCallFetch(true)
                Swal.fire({
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            // setTodosByUser((prev) => {
            //     const modifyTodo = prev.map((td) => {
            //         if (td._id === id) {
            //             return { ...td, todoStatus: todoStatus };
            //         }
            //         return td;
            //     })
            //     return modifyTodo;
            // });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }

    };

    return (
        <div ref={drop} className={`${isOver ? "bg-gray-200" : "bg-blue-100"} py-4 px-8 rounded-4xl`}>
            <h2 className='text-center uppercase mb-5 text-xl font-semibold'>
                {todoStatus} <span className='bg-white p-2 rounded-full'>{categorized[todoStatus].length}</span>
            </h2>
            {
                categorized[todoStatus].map((stTd, idx) => <SingleTask todo={stTd} key={idx}></SingleTask>)
            }
        </div>
    );
};

export default AllTasks;