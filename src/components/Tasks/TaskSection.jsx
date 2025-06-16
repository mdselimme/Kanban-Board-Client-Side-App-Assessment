import React from 'react';
import useAuth from '../hooks/useAuth';
import SingleTask from './SingleTask';

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
            <div className='grid grid-cols-3 items-start gap-24'>
                {
                    category.map((td, index) =>
                        <div className='bg-blue-100 py-4 px-8 rounded-4xl' key={index}>
                            <h2 className='text-center uppercase mb-5 text-xl font-semibold'>
                                {td}
                            </h2>
                            {
                                categorized[td].map((stTd, idx) => <SingleTask todo={stTd} key={idx}></SingleTask>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TaskSection;