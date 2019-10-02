import React from 'react';

export default function TodoForm(props){

    console.log(props);


    return(
        <form>
            <input
            type="text"
            name="todo"
            />
            <button type="submit">Add Todo</button>
            <button onClick={props.clearTodo}>Clear Completed</button>
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