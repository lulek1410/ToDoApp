"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const Tasks_1 = require("./routes/Tasks");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "front")));
(0, Tasks_1.setupTasksRouting)(app);
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "front", "index.html"));
});
var port = process.env.PORT || "5000";
app.listen(5000, () => {
    console.log("server listens ad 5000");
});
