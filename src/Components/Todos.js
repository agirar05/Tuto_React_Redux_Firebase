import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import AddTodo from "./AddTodo.js";
import Todo from "./Todo.js";

function Todos() {
	const { displayName, uid } = useSelector((state) => state.firebase.auth);

	useFirestoreConnect({
		collection: `Users/${uid}/Todos`,
		storeAs: "todos",
	});

	const todos = useSelector((state) => state.firestore.data.todos);

	return (
	<div>
		<h3>Hello {displayName}</h3>
		<h4>Todos</h4>
		<AddTodo />
		<ul
		style={{
			listStyleType: "none",
		}}
		>
		{todos &&
			Object.values(todos).map((todo) => (
			<li>
				<Todo
				title={todo.title}
				isDone={todo.isDone}
				todoID={todo.todoID}
				/>
			</li>
			))}
		</ul>
	</div>
	);
};

export default Todos;