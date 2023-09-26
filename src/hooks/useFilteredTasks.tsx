import { useAppSelector } from "./useAppSelector";

const useFilteredTasks = () => {
	const tasks = useAppSelector((state) => state.tasks);
	const filter = useAppSelector((state) => state.aside.selectedFilter);

	switch (filter) {
		case "All": {
			return [...tasks].sort((a, b) => {
				if ((a.done && !b.done) || (a.overdueDays <= 0 && b.overdueDays > 0))
					return 1;
				if ((!a.done && b.done) || (a.overdueDays > 0 && b.overdueDays <= 0))
					return -1;
				return 0;
			});
			break;
		}
		case "To do": {
			return tasks.filter((task) => task.overdueDays <= 0 && !task.done);
			break;
		}
		case "Overdue": {
			return tasks.filter((task) => task.overdueDays > 0 && !task.done);
			break;
		}
		case "Done": {
			return tasks.filter((task) => task.done);
			break;
		}
	}
};

export default useFilteredTasks;
