


const Input = ( { name, handleChange, handleKeyDown, id } ) => {
    
    return ( 
        <>
        <form className='form' onSubmit={handleKeyDown}>
            <div className='form-open'></div>
            <input
                type='text'
                id={id}
                className='form__input'
                name='name'
                value={name}
                placeholder='Create a new todo...'
                onChange={handleChange}
            />
        </form>
        </>
    );
}
 
export default Input;