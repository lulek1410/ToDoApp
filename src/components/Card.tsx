import "./Card.css";
import React from "react";

interface CardProps {
	name: string;
	description: string;
	dueDate: string;
}

const Card = ({ name, description, dueDate }: CardProps) => {
	return (
		<div className="card">
			<div className="card-title">
				<h2>{name}</h2>
				<p>{dueDate}</p>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Card;
