export interface TaskData {
	title: string;
	description: string;
	dueDate: string;
	done: boolean;
	overdueDays: number;
}

export interface Task extends TaskData {
	id: number;
}

export type Tasks = Array<Task>;
