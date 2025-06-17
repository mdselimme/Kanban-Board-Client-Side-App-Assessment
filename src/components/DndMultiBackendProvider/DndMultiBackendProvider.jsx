import { MouseTransition, TouchTransition } from 'dnd-multi-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider as BothDndProvider } from 'react-dnd-multi-backend';

const DndMultiBackendProvider = ({ children }) => {

    const HTML5toTouch = {
        backends: [
            {
                backend: HTML5Backend,
                transition: MouseTransition
            },
            {
                backend: TouchBackend,
                options: { enableMouseEvents: true },
                transition: TouchTransition
            },
        ],
    };

    return (
        <BothDndProvider options={HTML5toTouch}>
            {children}
        </BothDndProvider>
    );
};

export default DndMultiBackendProvider;