import Link from "next/link";
import * as React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const todos: Todo[] = await res.json();
	return todos;
};

async function TodosList() {
	const todos = await fetchTodos();
	return (
		<div>
			{todos.map((todo) => (
				<p key={todo.id}>
					<Link href={`/toods/${todo.id}`}>Todo: {todo.id}</Link>
				</p>
			))}
		</div>
	);
}

export default TodosList;
