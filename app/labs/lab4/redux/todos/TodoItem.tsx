import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button, ListGroupItem } from "react-bootstrap";

type Props = {
  todo: {
    id: string;
    title: string;
  };
};

export default function TodoItem({ todo }: Props) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem key={todo.id} className="d-flex align-items-center">
            {todo.title}
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className="bg-primary"> Edit </Button>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" className="bg-danger"> Delete </Button>
        </ListGroupItem>
    );
}
