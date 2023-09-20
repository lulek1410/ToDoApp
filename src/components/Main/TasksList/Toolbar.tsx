import "./Toolbar.css";
import React from "react";

interface TooBarProps {
	openDialog: () => void;
}

const Toolbar = ({ openDialog }: TooBarProps) => {
	return (
		<div className="toolbar">
			<h1>Tasks</h1>
			<button className="btn active-btn add-task-btn" onClick={openDialog}>
				+
			</button>
		</div>
	);
};

export default Toolbar;
