import React from 'react';
import useAuth from '../hooks/useAuth';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const TaskSection = () => {

    const { todosByUser } = useAuth();

    const categorized = {
        todo: [],
        in_progress: [],
        done: []
    };

    todosByUser.forEach((item) => {
        categorized[item.todoStatus].push(item);
    });

    const category = Object.keys(categorized);


    return (
        <div className='mt-8'>
            <h1 className='text-center mb-8 text-2xl font-bold'>Task Section</h1>
            <div className='grid grid-cols-3 justify-start gap-24'>
                {
                    category.map((td, index) =>
                        <div className='bg-blue-100 py-4 px-8 rounded-4xl' key={index}>
                            <h2 className='text-center uppercase mb-5 text-xl font-semibold'>
                                {td}
                            </h2>
                            {
                                categorized[td].map((stTd, idx) => <div className='bg-white my-4 p-3 rounded-2xl cursor-grab' key={idx}>
                                    <div className='flex justify-between items-center mb-2'>
                                        <h1>{stTd.todoTitle}</h1>
                                        <div>
                                            <button type='button' className='bg-[#950CF5] p-1 rounded-2xl text-white text-lg cursor-pointer'><FaEdit /></button>
                                            <button type='button' className='ml-3 bg-[#00AC41] p-1 rounded-2xl text-white text-lg cursor-pointer'>
                                                <MdDeleteForever />
                                            </button>
                                        </div>
                                    </div>
                                    <h1 className='mb-2'>{stTd.todoDescription}</h1>
                                    <h3>Deadline: {stTd.todoDeadline}</h3>
                                </div>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TaskSection;