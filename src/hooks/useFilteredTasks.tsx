import Task from "../store/reducers/interfaces/Task";
import { useAppSelector } from "./useAppSelector";

const useFilteredTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const filter = useAppSelector((state) => state.aside.selectedFilter);
	const isOverdue = (task: Task) => {
		return task.overdueDays > 0;
	};

	switch (filter) {
		case "All": {
			return [...tasks].sort((a, b) => {
				if ((a.done && !b.done) || (!isOverdue(a) && isOverdue(b))) return 1;
				if ((!a.done && b.done) || (isOverdue(a) && !isOverdue(b))) return -1;
				return 0;
			});
			break;
		}
		case "To do": {
			return tasks.filter((task) => !isOverdue(task) && !task.done);
			break;
		}
		case "Overdue": {
			return tasks.filter((task) => isOverdue(task) && !task.done);
			break;
		}
		case "Done": {
			return tasks.filter((task) => task.done);
			break;
		}
	}
};

export default useFilteredTasks;
