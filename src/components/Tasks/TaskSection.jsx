import useAuth from '../hooks/useAuth';
import SingleTask from './SingleTask';
import AllTasks from './AllTasks';

const TaskSection = () => {

    const { todosByUser } = useAuth();

    // Category Object 
    const categorized = {
        todo: [],
        in_progress: [],
        done: []
    };


    // Push Category wise Task 
    todosByUser.forEach((item) => {
        categorized[item.todoStatus].push(item);
    });


    // Category Keys 
    const category = Object.keys(categorized);


    return (
        <div className='mt-8'>
            <h1 className='text-center mb-8 text-2xl font-bold'>Task Section</h1>
            {/* Task Section Single data */}
            <div className={`grid sm:grid-cols-1 md:grid-cols-3 sm:items-start md:items-stretch min-h-96 sm:mb-8 sm:gap-12 md:gap-24`}>
                {
                    category.map((todoStatusKey, index) => <AllTasks
                        key={index}
                        todoStatus={todoStatusKey}
                        categorized={categorized}
                    ></AllTasks>)
                }
            </div>
        </div>
    );
};

export default TaskSection;