import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
    const todoStyle = {
        textDecoration: todo.isCompleted ? "line-through" : "none",
        opacity: todo.isCompleted ? 0.5 : 1,
    };

    return (
        <div
            style={todoStyle}
            className="w-full bg-white shadow-md rounded-xl flex items-center justify-between py-4 px-6 transition-all hover:shadow-lg"
        >
            <ChangeTodo todo={todo} />
            <span className="text-center font-bold uppercase grow text-gray-700">
                {todo.title}
            </span>
            <div className="flex items-center mx-2">
                <EditTodo todo={todo} />
            </div>
            <div className="flex items-center">
                <DeleteTodo todo={todo} />
            </div>
        </div>
    );
};

export default Todo;
