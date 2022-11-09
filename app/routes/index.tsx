import * as React from "react";

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

  return redirect(`/`);
};

export default function Index() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate("todo-list");
  };

  return (
    <div className="m-5">
      <h1 className="text-center mb-4 font-bold">TODO Firebase</h1>
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
      <button
        className="border-gray-500 border rounded-md p-2 mt-4"
        onClick={goToList}
      >
        Go to list
      </button>
    </div>
  );
}
