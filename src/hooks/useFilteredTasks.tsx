import { getCurrentDate } from "../components/Main/TasksList/utils/getCurrentDate";
import { getDatesDiffInDays } from "../components/Main/TasksList/utils/getDatesDiffInDays";
import { useAppSelector } from "./useAppSelector";

const useFilteredTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const filter = useAppSelector((state) => state.aside.selectedFilter);
	const today = getCurrentDate();

	switch (filter) {
		case "All": {
			return tasks;
			break;
		}
		case "To do": {
			return tasks.filter(
				(task) => getDatesDiffInDays(task.dueDate, today) <= 0
			);
			break;
		}
		case "Overdue": {
			return tasks.filter(
				(task) => getDatesDiffInDays(task.dueDate, today) > 0
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
