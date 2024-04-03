import { createContext } from "react";

export const HandlerContext = createContext({
    addNewTodo: (newTodo) => {},
    deleteHandler:(id) => {},
    editHandler: (id, todo) => {},
})