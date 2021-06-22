import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Todo({ isDone, title, todoID }) {
	const [isTodoItemDone, setTodoItemDone] = useState(isDone);
	const firestore = useFirestore();
	const { uid } = useSelector(state => state.firebase.auth);

	const handleChange = (event) => {
	if (event.currentTarget.type === "checkbox") {
		setTodoItemDone(!isTodoItemDone);
		firestore.collection("Users").doc(uid).collection("Todos").doc(todoID).update({
			isDone: !isTodoItemDone
		})
	}
	};

	useEffect(() => {
		setTodoItemDone(isDone);
	}, [isDone])

	return (
		<div style={{
			textDecoration: isTodoItemDone && "line-through",
			opacity: isTodoItemDone ? 0.5 : 1,
		}}>
			<input
			type="checkbox"
			name=""
			id=""
			onChange={handleChange}
			checked={isTodoItemDone}
			/>
			{title}
		</div>
	);
};

export default Todo;