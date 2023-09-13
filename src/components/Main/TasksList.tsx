import { useState } from "react";
import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "../../hooks/useAppSelector";
import TaskCreateDialog from "./TaskCreateDialog";

const TasksList = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const [dialogOpen, setDialogOpen] = useState(false);
	return (
		<main>
			<ToolBar
				openDialog={() => {
					setDialogOpen(true);
				}}
			/>
			<div className="tasks-list">
				{tasks.map(({ id, title, description, dueDate }, index) => (
					<Card
						id={id}
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
