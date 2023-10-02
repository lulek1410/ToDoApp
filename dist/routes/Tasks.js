"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTasksRouting = void 0;
const fs_1 = __importDefault(require("fs"));
const getTodaysDate = () => {
    const today = new Date();
    const formatedDate = today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + today.getDate()).slice(-2);
    return formatedDate;
};
const refreshData = (tasks) => {
    return new Promise((resolve, reject) => {
        try {
            const getDatesDiffInDays = (start, end) => {
                const dateStart = new Date(start);
                const dateEnd = new Date(end);
                const diffTime = dateEnd.getTime() - dateStart.getTime();
                return Math.round(diffTime / (1000 * 60 * 60 * 24));
            };
            const today = getTodaysDate();
            tasks.map((task) => (task.overdueDays = getDatesDiffInDays(task.dueDate, today)));
            const data = {
                tasks: tasks,
                lastUpdate: today,
            };
            fs_1.default.writeFileSync("./data/tasks.json", JSON.stringify(data, null, 2), "utf8");
            resolve();
        }
        catch (error) {
            reject(error);
        }
    });
};
const setupTasksRouting = (app) => {
    app.get("/tasks", (req, res) => {
        fs_1.default.readFile("./data/tasks.json", "utf8", (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                throw err;
            }
            const jsonData = JSON.parse(data);
            const tasks = jsonData.tasks;
            const today = getTodaysDate();
            if (jsonData.lastUpdate !== today) {
                try {
                    yield refreshData(tasks);
                }
                catch (error) {
                    res.status(500).send("Internal Server Error");
                    return;
                }
            }
            res.send(tasks);
        }));
    });
    app.put("/tasks", (req, res) => {
        fs_1.default.readFile("./data/tasks.json", "utf8", (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                res.status(500).send("Error reading file");
                return;
            }
            const jsonData = JSON.parse(data);
            jsonData.tasks = req.body.data;
            fs_1.default.writeFile("./data/tasks.json", JSON.stringify(jsonData, null, 2), "utf8", (err) => {
                if (err) {
                    res.status(500).send("Error writing to file");
                    return;
                }
            });
        }));
        res.status(200).send("OK");
    });
};
exports.setupTasksRouting = setupTasksRouting;
