import { useAppDispatch } from "../hooks/useAppDispatch";
import "./Toolbar.css";
import React from "react";

const Toolbar = () => {
	return (
		<div className="toolbar">
			<h1>Tasks</h1>
			<button className="add-task-btn">+</button>
		</div>
	);
};

export default Toolbar;
