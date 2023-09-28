import "./Card.css";
import {
	faTrash,
	faPenToSquare,
	faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import {
	deleteTask,
	markAsDone,
	reopen,
} from "./../../../store/reducers/tasksSlice";
import { openDialog } from "./../../../store/reducers/dialogSlice";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import FaIconButton from "./FaIconButton";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface CardProps {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	overdueDays: number;
	done: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const { id, title, description, dueDate, overdueDays, done } = props;
	const dispatch = useAppDispatch();
	let overdue = false;
	const overdueInfo = `Overdue by: ${overdueDays} ${
		overdueDays > 1 ? "days" : "day"
	}`;
	const getStyle = () => {
		let style = "card";
		if (done) {
			style += " done";
		} else if (overdueDays > 0) {
			style += " overdue";
			overdue = true;
		}
		return style;
	};

	return (
		<motion.div
			className={getStyle()}
			layout
			transition={{ type: "spring", damping: 30, stiffness: 200 }}
			initial={{ opacity: 0, x: -1000 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 1000 }}
			ref={ref}
		>
			<div className="card-toolbar">
				<FaIconButton
					icon={done ? faRotateRight : faSquareCheck}
					onClick={() => {
						done ? dispatch(reopen(id)) : dispatch(markAsDone(id));
					}}
				/>
				<FaIconButton
					icon={faPenToSquare}
					onClick={() => {
						dispatch(openDialog(props));
					}}
				/>
				<FaIconButton
					icon={faTrash}
					onClick={() => {
						dispatch(deleteTask(id));
					}}
				/>
			</div>
			<div className="card-title">
				<h2>{title}</h2>
				<p>Due Date: {dueDate}</p>
			</div>
			{overdue ? <p className="overdue-info">{overdueInfo}</p> : null}
			<p className="card-description">{description}</p>
		</motion.div>
	);
});

export default Card;
