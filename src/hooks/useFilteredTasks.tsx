import { useAppSelector } from "./useAppSelector";

const useFilteredTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const filter = useAppSelector((state) => state.aside.selectedFilter);

	switch (filter) {
		case "All": {
			return tasks;
			break;
		}
		case "To do": {
			return tasks.filter(
				(task) => task.overdueDays <= 0
			);
			break;
		}
		case "Overdue": {
			return tasks.filter(
				(task) => task.overdueDays > 0
			);
			break;
		}
		case "Done": {
			return tasks;
			break;
		}
	}
};

export default useFilteredTasks;
