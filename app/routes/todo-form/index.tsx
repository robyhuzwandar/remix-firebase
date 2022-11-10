import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { addTodo } from "~/service/todo";
import { Form, useNavigate } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const todo = Object.fromEntries(body);

  addTodo({
    name: `${todo.name}`,
    description: `${todo.description}`,
    createdAt: Date.now(),
  });

  return redirect(`/todo-list`);
};

export default function TodoForm() {
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <button
        className="border-gray-500 border rounded-md p-2 mb-4 w-1/3"
        onClick={() => navigate("/todo-list")}
      >
        Go to list
      </button>
      <Form method="post" className="flex flex-col">
        <input
          placeholder="name"
          name="name"
          className="border-gray-500 rounded-md p-2 border mb-4"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border-gray-500 rounded-md p-2 border mb-4"
        />
        <button className="border-gray-500 border rounded-md p-2" type="submit">
          Add
        </button>
      </Form>
    </div>
  );
}
