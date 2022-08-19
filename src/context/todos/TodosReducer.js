import { ADD_TODO, REMOVE_TODO } from "./TodosTypes";

export const initialState = {
    todos: [],
    isLoading: false
}


export const TodosReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:

            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        case REMOVE_TODO:
            const result = state.todos.filter((_, index) => index !== action.payload);

            return {
                ...state,
                todos: result
            }

        default:
            break;
    }
}


