import "./TasksList.css";
import Card from "./Card";
import ToolBar from "./Toolbar";
import { useAppSelector } from "./../../../hooks/useAppSelector";
import TaskCreateDialog from "./TaskCreateDialog";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import { openDialog } from "./../../../store/reducers/dialogSlice";
import { AnimatePresence } from "framer-motion";
import { useSplitedTasks } from "../../../hooks/useSplitedTasks";
import { Tasks } from "../../../store/reducers/interfaces/Tasks";

const renderCards = (cards: Tasks) => {
	return cards.map(({ id, title, description, dueDate, overdueDays, done }) => (
		<Card
			id={id}
			key={id}
			title={title}
			description={description}
			dueDate={dueDate}
			overdueDays={overdueDays}
			done={done}
		/>
	));
};

const TasksList = () => {
	const { overdue, open, done } = useSplitedTasks();
	const filter = useAppSelector((state) => state.aside.selectedFilter);
	const isOpen = useAppSelector((state) => state.dialog.isOpen);
	const dispatch = useAppDispatch();
	return (
		<section>
			<div className="tasks-list-wrapper">
				<ToolBar
					openDialog={() => {
						dispatch(openDialog());
					}}
				/>
				<div className="tasks-list">
					<AnimatePresence mode="popLayout">
						{(filter === "All" || filter === "Overdue") && renderCards(overdue)}
						{(filter === "All" || filter === "To do") && renderCards(open)}
						{(filter === "All" || filter === "Done") && renderCards(done)}
					</AnimatePresence>
				</div>
				<AnimatePresence>{isOpen && <TaskCreateDialog />}</AnimatePresence>
			</div>
		</section>
	);
};

export default TasksList;
