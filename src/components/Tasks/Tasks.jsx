

import React, { useRef } from 'react';

const Tasks = () => {

    const taskTitle = useRef(null);
    const taskDescription = useRef(null);
    const taskTimer = useRef(null);
    const taskPriority = useRef(null);

    return (
        <div>
            <h1 className='text-3xl font-bold'>Add Your Task</h1>
            {/* Add Task Body  */}
            <form className='mt-8 grid grid-cols-4 items-center gap-10'>
                {/* task title  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="title" className="text-base font-medium text-[#04141E]">Task Title</label>
                    <input name="tasktitle" ref={taskTitle} id="title" className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task title' />
                </div>
                {/* task description  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdescription" className="text-base font-medium text-[#04141E]">Task Description</label>
                    <input ref={taskDescription} name="taskdescription" id="taskdescription" className="w-full text-lg login-input mt-4" type="text" placeholder='Type your task description' />
                </div>
                {/* task timer  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdate" className="text-base font-medium text-[#04141E]">Task Timer</label>
                    <input ref={taskTimer} name="taskdate" id="taskdate" className="w-full text-lg login-input mt-4" type="datetime-local" />
                </div>
                {/* task priority  */}
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskpriority" className="text-base font-medium text-[#04141E]">Task Priority</label>
                    <select ref={taskPriority} name="taskpriority" className="w-full text-lg login-input mt-4" id="taskpriority">
                        <option disabled selected>Choose a Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Tasks;