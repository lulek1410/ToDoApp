import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { setupTasksRouting } from "./routes/Tasks";

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "front")));

setupTasksRouting(app);

app.get("*", (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, "front", "index.html"));
});

var port = process.env.PORT || "5000";

app.listen(5000, () => {
	console.log(`server listens on ${port}`);
});
