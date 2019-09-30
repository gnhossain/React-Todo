import React from 'react';

export default TodoForm(props){

    return(
        <form>
            <input
            type="text"
            />

            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

// const TodoForm = props => {

//     return(
//         <>
//         </>
//     )
// }
// export default TodoForm;