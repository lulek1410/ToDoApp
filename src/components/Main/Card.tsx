import "./Card.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteTask } from "../../store/reducers/tasksSlice";

interface CardProps {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

const Card = ({ id, title, description, dueDate }: CardProps) => {
	const dispatch = useAppDispatch();

	return (
		<div className="card">
			<button
				className="icon-btn"
				onClick={() => {
					dispatch(deleteTask(id));
				}}
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
			<div className="card-title">
				<h2>{title}</h2>
				<p>{dueDate}</p>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Card;
