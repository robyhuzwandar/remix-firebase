import { useNavigate } from "@remix-run/react";
import * as React from "react";
import { getTodo } from "~/service/todo";

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = React.useState<any[]>([]);

  React.useEffect(() => {
    getTodo(setTodos);
  }, []);

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        className="m-4 text-red-500 cursor-pointer"
      >
        Back
      </div>
      {todos.map((todo, index) => {
        return (
          <div key={index.toString()} className="m-4 p-2 border rounded-md">
            <div className="text-lg font-bold">{todo.name}</div>
            <div className="text-gray-500 text-base">{todo.description}</div>
          </div>
        );
      })}
    </div>
  );
}
