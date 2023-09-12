import React, { useState } from "react";
import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "../hooks/useAppSelector";
import TaskCreateDialog from "./TaskCreateDialog";

const TasksList = () => {
	const tasks = useAppSelector((state) => state.tasks.tasks);
	const [dialogOpen, setDialogOpen] = useState(true);
	console.log(tasks);
	return (
		<main>
			<ToolBar
				openDialog={() => {
					setDialogOpen(true);
				}}
			/>
			<div className="tasks-list">
				{tasks.map(({ title, description, dueDate }, index) => (
					<Card
						key={index}
						title={title}
						description={description}
						dueDate={dueDate}
					/>
				))}
			</div>
			<TaskCreateDialog
				isOpen={dialogOpen}
				close={() => {
					setDialogOpen(false);
				}}
			/>
		</main>
	);
};

export default TasksList;
