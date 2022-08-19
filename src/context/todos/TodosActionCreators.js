import { ADD_TODO, REMOVE_TODO } from "./TodosTypes"

export const addTodo = (name) => {
    return {
        type: ADD_TODO,
        payload: {
            title: name
        }
    }
}

export const removeTodo = (todoId) => ({
    type: REMOVE_TODO,
    payload: todoId
})
