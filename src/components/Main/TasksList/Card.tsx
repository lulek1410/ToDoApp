import "./Card.css";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import { deleteTask, markAsDone } from "./../../../store/reducers/tasksSlice";
import { openDialog } from "./../../../store/reducers/dialogSlice";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import FaIconButton from "./FaIconButton";

interface CardProps {
	id: number;
	title: string;
	description: string;
	dueDate: string;
	overdueDays: number;
	done: boolean;
}

const Card = (props: CardProps) => {
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
		<div className={getStyle()}>
			<div className="card-toolbar">
				<FaIconButton
					icon={faSquareCheck}
					onClick={() => {
						dispatch(markAsDone(id));
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
			<p>{description}</p>
		</div>
	);
};

export default Card;
