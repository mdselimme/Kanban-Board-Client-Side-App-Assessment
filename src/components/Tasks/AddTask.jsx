

import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosUrl from '../hooks/useAxiosUrl';

const AddTask = () => {

    const taskTitleRef = useRef(null);
    const taskDescriptionRef = useRef(null);
    const taskDeadlineRef = useRef(null);
    const taskPriorityRef = useRef(null);
    const [minDateTime, setMinDateTime] = useState('');
    const { user } = useAuth();

    //Add Tasks Form Submit 
    const handleTaskFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const userId = user.id;
            const todoTitle = taskTitleRef.current.value;
            const todoDescription = taskDescriptionRef.current.value;
            const todoDeadlineFind = taskDeadlineRef.current.value;
            // const todoDeadline = todoDeadlineFind.toString();
            const todoDeadline = "2025-06-17";
            console.log(todoDeadline)
            const todoPriority = taskPriorityRef.current.value;
            const todoBody = {
                userId,
                todoTitle,
                todoDescription,
                todoDeadline,
                todoPriority,
                todoStatus: "todo"
            }
            const resp = await useAxiosUrl.post('/todos/add-todo', todoBody);
            const data = await resp.data;
            console.log(data);
            e.target.reset();
        } catch (error) {
            console.log(error.message)
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
        <div>
            <h1 className='text-3xl font-bold'>Add Your Task</h1>
            {/* Add Task Body  */}
            <form onSubmit={handleTaskFormSubmit} className='mt-8 grid grid-cols-4 items-start gap-10'>
                {/* task title  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="title" className="text-base font-medium text-[#04141E]">Task Title <span className='text-red-600'>*</span></label>
                    <input required name="tasktitle" ref={taskTitleRef} id="title" className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task title' />
                </div>
                {/* task description  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdescription" className="text-base font-medium text-[#04141E]">Task Description <span className='text-red-600'>*</span></label>
                    <input ref={taskDescriptionRef} name="taskdescription" id="taskdescription" required className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task description' />
                </div>
                {/* task timer  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskDeadline" required className="text-base font-medium text-[#04141E]">Task Deadline <span className='text-red-600'>*</span></label>
                    <input min={minDateTime} ref={taskDeadlineRef} name="taskDeadline" id="taskDeadline" className="w-full text-lg login-input mt-4" type="datetime-local" />
                </div>
                {/* task priority  */}
                <div>
                    <div className="border-b border-[#E3E3E3] pb-2">
                        <label htmlFor="taskpriority" className="text-base font-medium text-[#04141E]">Task Priority <span className='text-red-600'>*</span></label>
                        <select required ref={taskPriorityRef} name="taskpriority" className="w-full text-lg login-input mt-4" id="taskpriority">
                            <option disabled selected>Choose a Priority</option>
                            <option defaultValue="High">High</option>
                            <option defaultValue="Medium">Medium</option>
                            <option defaultValue="Low">Low</option>
                        </select>
                    </div>
                    <div className='mt-5 text-end'>
                        <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Task</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;