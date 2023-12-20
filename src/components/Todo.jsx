import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import bullet from '../assets/images/icon-check.svg';
import cross from '../assets/images/icon-cross.svg';

const Todo = ( { tasks, deleteTask, handleComplete, onDragEnd } ) => {

    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <ul 
                        className='todo__wrapper'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    > 
                    {tasks.map((task, index) => (
                        <Draggable 
                            key={task.id} 
                            draggableId={task.id}
                            index={index}
                        >
                            {(provided) => (
                                <li 
                                    className='todo__task-wrapper'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <div className="todo__task">
                                        {task.completed ?
                                        <img 
                                            src={bullet} 
                                            className='todo__task-closed'
                                            alt=""
                                            onClick={() => handleComplete(task.id)}
                                        /> :
                                        <div 
                                            className='todo__task-open'
                                            alt=""
                                            onClick={() => handleComplete(task.id)}
                                        />
                                    }
                                        <div 
                                            className={task.completed ? 'todo__text-closed' : 'todo__text-open'}
                                            onClick={() => handleComplete(task.id)}
                                        >
                                            {task.name}
                                        </div>
                                    </div>
                                    
                                    <img 
                                        src={cross} 
                                        alt="" 
                                        onClick={() => deleteTask(task.id)}
                                    />
                                </li>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
     );
}
 
export default Todo;