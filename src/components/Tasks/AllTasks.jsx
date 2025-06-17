import React from 'react';
import { useDrop } from 'react-dnd';
import SingleTask from './SingleTask';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosUrl from '../hooks/useAxiosUrl';

const AllTasks = ({ todoStatus, categorized }) => {

    const { setCallFetch } = useAuth();

    // Drop Functionality 
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "todo",
        drop: (item) => updateStatusChange(item.id),
        collect: (monitor) => ({
            isOver: !monitor.isOver()
        })
    }));

    // Status Update And send Server Call 
    const updateStatusChange = async (id) => {
        try {
            // Call Upadate Status Api 
            const res = await useAxiosUrl.patch(`/todos/update-status/${id}`, { todoStatus });
            const response = await res.data;
            if (response.success) {
                setCallFetch(true);
                Swal.fire({
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
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
            {/* Fetch Single Task  */}
            {
                categorized[todoStatus].map((stTd, idx) => <SingleTask todo={stTd} key={idx}></SingleTask>)
            }
        </div>
    );
};

export default AllTasks;