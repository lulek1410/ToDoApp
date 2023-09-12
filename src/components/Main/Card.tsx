import "./Card.css";
import React from "react";

interface CardProps {
	title: string;
	description: string;
	dueDate: string;
}

const Card = ({ title, description, dueDate }: CardProps) => {
	return (
		<div className="card">
			<div className="card-title">
				<h2>{title}</h2>
				<p>{dueDate}</p>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Card;
