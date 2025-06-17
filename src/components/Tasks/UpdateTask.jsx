

import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosUrl from '../hooks/useAxiosUrl';
import Swal from 'sweetalert2';

const UpdateTask = () => {

    // Todo Input Ref 
    const taskTitleRef = useRef(null);
    const taskDescriptionRef = useRef(null);
    const taskDeadlineRef = useRef(null);
    const taskPriorityRef = useRef(null);
    const [minDateTime, setMinDateTime] = useState('');
    const { user, setCallFetch, setOpenUpdateTask, singleTodo } = useAuth();

    // convert single todo time to localtime for show input default value show 
    console.log(singleTodo.todoDeadline)
    const localDateTimeValue = new Date(singleTodo.todoDeadline).toISOString().slice(0, 16);
    console.log(localDateTimeValue)
    //Update Tasks Form Submit 
    const handleUpdateTaskFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // All Todo Data From Input
            const userId = user.id;
            const todoTitle = taskTitleRef.current.value;
            const todoDescription = taskDescriptionRef.current.value;
            const todoDeadlineFind = taskDeadlineRef.current.value;
            const todoDeadline = todoDeadlineFind.toString();
            const todoPriority = taskPriorityRef.current.value;
            // Todo Body 
            const todoBody = {
                userId,
                todoTitle,
                todoDescription,
                todoDeadline,
                todoPriority,
                todoStatus: singleTodo.todoStatus
            }
            // Api Call And update Data 
            const resp = await useAxiosUrl.put(`/todos/update-todo/${singleTodo._id}`, todoBody);
            const data = await resp.data;
            if (data.success) {
                setCallFetch(true);
                setOpenUpdateTask(false);
                // Success Message 
                Swal.fire({
                    icon: "success",
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
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


    // Disabled Todays Before Date and Time 
    useEffect(() => {
        const nowTime = new Date();
        const offSetTime = nowTime.getTimezoneOffset();
        const localDateAndTime = new Date(nowTime.getTime() - offSetTime * 60 * 1000);
        setMinDateTime(localDateAndTime.toISOString().slice(0, 16));
    }, []);



    return (
        <div className='sm:px-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl md:text-3xl font-bold'>Update Your Task</h1>
                <button onClick={() => setOpenUpdateTask(false)} className='text-3xl font-medium text-white bg-amber-700 px-2 rounded-2xl'>X</button>
            </div>
            {/* Add Task Body  */}
            <form onSubmit={handleUpdateTaskFormSubmit} className='mt-8 grid grid-cols-1 items-start gap-10'>
                {/* task title  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="title" className="text-base font-medium text-[#04141E]">Task Title <span className='text-red-600'>*</span></label>
                    <input defaultValue={singleTodo.todoTitle} required name="tasktitle" ref={taskTitleRef} id="title" className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task title' />
                </div>
                {/* task description  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdescription" className="text-base font-medium text-[#04141E]">Task Description <span className='text-red-600'>*</span></label>
                    <input defaultValue={singleTodo.todoDescription} ref={taskDescriptionRef} name="taskdescription" id="taskdescription" required className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task description' />
                </div>
                {/* task Deadline  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskDeadline" required className="text-base font-medium text-[#04141E]">Task Deadline <span className='text-red-600'>*</span></label>
                    <input defaultValue={localDateTimeValue} min={minDateTime} ref={taskDeadlineRef} name="taskDeadline" id="taskDeadline" className="w-full text-lg login-input mt-4" type="datetime-local" />
                </div>
                {/* task priority  */}
                <div>
                    <div className="border-b border-[#E3E3E3] pb-2">
                        <label htmlFor="taskpriority" className="text-base font-medium text-[#04141E]">Task Priority <span className='text-red-600'>*</span></label>
                        <select defaultValue={singleTodo.todoPriority} required ref={taskPriorityRef} name="taskpriority" className="w-full text-lg login-input mt-4" id="taskpriority">
                            <option disabled selected>Choose a Priority</option>
                            <option defaultValue="High">High</option>
                            <option defaultValue="Medium">Medium</option>
                            <option defaultValue="Low">Low</option>
                        </select>
                    </div>
                    {/* Update Task Button  */}
                    <div className='mt-5 text-end'>
                        <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update Task</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;