import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "../../hooks/useAppSelector";
import TaskCreateDialog from "./TaskCreateDialog";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { openDialog } from "../../store/reducers/dialogSlice";
import { AnimatePresence, motion } from "framer-motion";

const TasksList = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const isOpen = useAppSelector((state) => state.dialog.isOpen);
	const dispatch = useAppDispatch();

	return (
		<main>
			<ToolBar
				openDialog={() => {
					dispatch(openDialog());
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
			<AnimatePresence>{isOpen && <TaskCreateDialog />}</AnimatePresence>
		</main>
	);
};

export default TasksList;
