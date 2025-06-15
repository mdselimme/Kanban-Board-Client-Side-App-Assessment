

import React from 'react';

const Tasks = () => {

    return (
        <div>
            <h1 className='text-3xl font-bold'>Add Your Task</h1>
            {/* Add Task Body  */}
            <form className='mt-8 grid grid-cols-4 items-center gap-10'>
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="title" className="text-base font-medium text-[#04141E]">Task Title</label>
                    <div className="flex items-center mt-3">
                        <input name="tasktitle" id="title" className="w-full text-lg login-input" type="text" placeholder='Type your task title' />
                    </div>
                </div>
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdescription" className="text-base font-medium text-[#04141E]">Task Description</label>
                    <div className="flex items-center mt-3">
                        <input name="taskdescription" id="taskdescription" className="w-full text-lg login-input" type="text" placeholder='Type your task description' />
                    </div>
                </div>
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskdate" className="text-base font-medium text-[#04141E]">Task Timer</label>
                    <div className="flex items-center mt-3">
                        <input name="taskdate" id="taskdate" className="w-full text-lg login-input" type="datetime-local" />
                    </div>
                </div>
                <div className="border-b border-[#E3E3E3] pb-2">
                    <label htmlFor="taskpriority" className="text-base font-medium text-[#04141E]">Task Priority</label>
                    <div className="flex items-center mt-3">
                        <select name="taskpriority" className="w-full text-lg login-input" id="taskpriority">
                            <option disabled selected>Choose a Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Tasks;