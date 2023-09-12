import React from "react";
import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "../hooks/useAppSelector";

const TasksList = () => {
	const tasks = useAppSelector((state) => state.tasks.tasks);
	console.log(tasks);
	return (
		<main>
			<ToolBar />
			<div className="tasks-list">
				{tasks.map(({ name, description, dueDate }, index) => (
					<Card
						key={index}
						name={name}
						description={description}
						dueDate={dueDate}
					/>
				))}
			</div>
		</main>
	);
};

export default TasksList;
