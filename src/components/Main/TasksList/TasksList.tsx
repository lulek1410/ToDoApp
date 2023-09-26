import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "./../../../hooks/useAppSelector";
import TaskCreateDialog from "./TaskCreateDialog";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import { openDialog } from "./../../../store/reducers/dialogSlice";
import { AnimatePresence } from "framer-motion";
import useFilteredTasks from "../../../hooks/useFilteredTasks";

const TasksList = () => {
	const tasks = useFilteredTasks();
	const isOpen = useAppSelector((state) => state.dialog.isOpen);
	const dispatch = useAppDispatch();

	return (
		<section>
			<ToolBar
				openDialog={() => {
					dispatch(openDialog());
				}}
			/>
			<div className="tasks-list">
				<AnimatePresence mode="popLayout">
					{tasks.map(
						({ id, title, description, dueDate, overdueDays, done }) => (
							<Card
								id={id}
								key={id}
								title={title}
								description={description}
								dueDate={dueDate}
								overdueDays={overdueDays}
								done={done}
							/>
						)
					)}
				</AnimatePresence>
			</div>
			<AnimatePresence>{isOpen && <TaskCreateDialog />}</AnimatePresence>
		</section>
	);
};

export default TasksList;
