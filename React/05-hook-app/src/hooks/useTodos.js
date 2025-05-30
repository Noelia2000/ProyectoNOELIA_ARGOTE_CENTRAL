import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";


const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo,
        }
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] remove todo',
            payload: id,
        });

    }
     const handleToggleTodo = (id) => {

        dispatch({
            type: '[TODO] toggle todo',
            payload: id,
        });
    }

    return{
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo

    }
}
