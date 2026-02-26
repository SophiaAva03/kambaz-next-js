import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";
import { Button, FormControl, ListGroupItem } from "react-bootstrap";

export default function TodoForm(
) {
    const { todo } = useSelector((state: RootState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroupItem className="d-flex align-items-center">
            <FormControl
                defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
            <Button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click" className="bg-success"> Add </Button>
            <Button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click" className="bg-warning text-dark"> Update </Button>
        </ListGroupItem>
    );
}

