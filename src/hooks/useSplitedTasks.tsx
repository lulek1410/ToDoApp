import { Tasks } from "../store/reducers/interfaces/Tasks";
import { useAppSelector } from "./useAppSelector";

export const useSplitedTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);

	const done: Tasks = [];
	const overdue: Tasks = [];
	const open: Tasks = [];
	tasks.map((task) => {
		if (task.done) {
			done.push(task);
		} else if (task.overdueDays > 0) {
			overdue.push(task);
		} else {
			open.push(task);
		}
	});
	return { overdue: overdue, open: open, done: done };
};
