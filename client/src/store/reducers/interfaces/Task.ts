interface Task {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	done: boolean;
	overdueDays: number;
}

export default Task;
