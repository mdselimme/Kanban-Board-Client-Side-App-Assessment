import useAuth from '../hooks/useAuth';
import SingleTask from './SingleTask';
import AllTasks from './AllTasks';

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

    console.log(category)


    return (
        <div className='mt-8'>
            <h1 className='text-center mb-8 text-2xl font-bold'>Task Section</h1>
            <div className={`grid grid-cols-3 items-stretch min-h-96 gap-24`}>
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