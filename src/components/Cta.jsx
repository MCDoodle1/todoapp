

const Cta = ( { isMobile, openTasks, removeCompletedTasks, filter, setFilter } ) => {
    
    
    return ( 
    isMobile ?
    <>
    <div className='cta__todo-wrapper'>
        <p>{openTasks.length === 1 ? `1 item left` : `${openTasks.length} items left`}</p>
        <button onClick={removeCompletedTasks}>Clear Completed</button>
    </div>

    <div className="cta__button-wrapper">
        <button 
            className={filter === 'all' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('all')}>All
        </button>
        <button 
            className={filter === 'open' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('open')}>Active
        </button>
        <button 
            className={filter === 'closed' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('closed')}>Complete
        </button>
    </div>
    
    <p className="cta__text">Drag and drop to reorder list</p> 
    </> :

    <>
    <div className='cta__todo-wrapper'>
        <p>{openTasks.length === 1 ? `1 item left` : `${openTasks.length} items left`}</p>
    <div className="cta__button-wrapper">
        <button 
            className={filter === 'all' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('all')}>All
        </button>
        <button 
            className={filter === 'open' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('open')}>Active
        </button>
        <button 
            className={filter === 'closed' ? 'cta__button-on' : undefined} 
            onClick={() => setFilter('closed')}>Complete
        </button>
    </div>
        <button onClick={removeCompletedTasks}>Clear Completed</button>
    </div>


    <p className="cta__text">Drag and drop to reorder list</p> 
    </>

    ) 
}
 
export default Cta;