import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteTask } from "../../store/reducers/tasksSlice";
import { openDialog } from "../../store/reducers/dialogSlice";

interface CardProps {
	id: number;
	title: string;
	description: string;
	dueDate: string;
}

const Card = (props: CardProps) => {
	const { id, title, description, dueDate } = props;
	const dispatch = useAppDispatch();

	return (
		<div className="card">
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
			<div className="card-title">
				<h2>{title}</h2>
				<p>{dueDate}</p>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Card;
