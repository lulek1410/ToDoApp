import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import { deleteTask } from "./../../../store/reducers/tasksSlice";
import { openDialog } from "./../../../store/reducers/dialogSlice";
import { getCurrentDate } from "./utils/getCurrentDate";
import { getDatesDiffInDays } from "./utils/getDatesDiffInDays";

interface CardProps {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

const Card = (props: CardProps) => {
	const { id, title, description, dueDate } = props;
	const dispatch = useAppDispatch();
	const today = getCurrentDate();
	const overdue = today.localeCompare(dueDate) === 1;
	const overdueDays = getDatesDiffInDays(dueDate, today);
	const overdueInfo =
		"Overdue by: " + overdueDays + (overdueDays > 1 ? " days" : " day");

	return (
		<div className={"card" + (overdue ? " overdue" : "")}>
			<div className="card-toolbar">
				<button
					className="icon-btn"
					onClick={() => {
						dispatch(openDialog(props));
					}}
				>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button
					className="icon-btn"
					onClick={() => {
						dispatch(deleteTask(id));
					}}
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
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
