import { Express, Request, Response } from "express";
import fs from "fs";

export const setupTasksRouting = (app: Express) => {
	app.get("/tasks", (req: Request, res: Response) => {
		fs.readFile("./data/tasks.json", "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			console.log(JSON.parse(data).lastUpdate);
			res.send(JSON.parse(data).tasks);
		});
	});

	app.put("/tasks", (req: Request, res: Response) => {
		fs.readFile("./data/tasks.json", "utf8", (err, data) => {
			if (err) {
				throw err;
			}
			const newData = req.body;

			res.status(200).json("OK");
		});
	});
};
