import Task from "../store/reducers/interfaces/Task";
import { useAppSelector } from "./useAppSelector";

export const useSplitedTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);

	const done: Array<Task> = [];
	const overdue: Array<Task> = [];
	const open: Array<Task> = [];
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
