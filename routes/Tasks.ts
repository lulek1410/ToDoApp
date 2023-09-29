import { Express, Request, Response } from "express";
import fs from "fs";

interface Task {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	done: boolean;
	overdueDays: number;
}

type Tasks = Array<Task>;

const getTodaysDate = () => {
	const today = new Date();
	const formatedDate =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + today.getDate()).slice(-2);
	return formatedDate;
};

const refreshData = (tasks: Tasks) => {
	return new Promise<void>((resolve, reject) => {
		try {
			const getDatesDiffInDays = (start: string, end: string) => {
				const dateStart = new Date(start);
				const dateEnd = new Date(end);
				const diffTime = dateEnd.getTime() - dateStart.getTime();
				return Math.round(diffTime / (1000 * 60 * 60 * 24));
			};

			const today = getTodaysDate();

			tasks.map(
				(task: { overdueDays: number; dueDate: string }) =>
					(task.overdueDays = getDatesDiffInDays(task.dueDate, today))
			);
			const data = {
				tasks: tasks,
				lastUpdate: today,
			};

			fs.writeFileSync("./data/tasks.json", JSON.stringify(data), "utf8");
			resolve();
		} catch (error) {
			reject(error);
		}
	});
};

export const setupTasksRouting = (app: Express) => {
	app.get("/tasks", (req: Request, res: Response) => {
		fs.readFile("./data/tasks.json", "utf8", async (err: any, data: string) => {
			if (err) {
				throw err;
			}
			const jsonData = JSON.parse(data);
			const tasks = jsonData.tasks;
			const today = getTodaysDate();
			if (jsonData.lastUpdate !== today) {
				try {
					await refreshData(tasks);
				} catch (error) {
					res.status(500).send("Internal Server Error");
					return;
				}
			}
			res.send(tasks);
		});
	});

	app.put("/tasks", (req: Request, res: Response) => {
		fs.readFile("./data/tasks.json", "utf8", async (err: any, data: string) => {
			if (err) {
				res.status(500).send("Error reading file");
				return;
			}
			const jsonData = JSON.parse(data);
			jsonData.tasks = req.body.data;
			fs.writeFile(
				"./data/tasks.json",
				JSON.stringify(jsonData, null, 2),
				"utf8",
				(err) => {
					if (err) {
						res.status(500).send("Error writing to file");
						return;
					}
				}
			);
		});
		res.status(200).send("OK");
	});
};
