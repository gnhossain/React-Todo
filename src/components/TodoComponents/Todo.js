import React from 'react';


const Todo = props => {

    console.log(props);
    const todo = props.todo;
    console.log(todo);

    return(
            <p
            style={todo.completed ? {textDecoration: 'line-through' } : null}
        onClick = {() => props.toggleCompleted(todo.id)}>{todo.task}</p>
    );
};
export default Todo;