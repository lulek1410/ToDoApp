import "./TaskCreateDialog.css";
import { useEffect, useRef } from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addTask } from "../../store/reducers/tasksSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

interface TaskCreateDialogProps {
	isOpen: boolean;
	close: () => void;
}

const today = new Date();
const formatedDate =
	today.getFullYear() +
	"-" +
	("0" + (today.getMonth() + 1)).slice(-2) +
	"-" +
	("0" + today.getDate()).slice(-2);

interface InitialValues {
	title: string;
	description: string;
	dueDate: string;
}

const initialValues: InitialValues = {
	title: "",
	description: "",
	dueDate: formatedDate,
};

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Required!"),
	description: Yup.string().required("Required!"),
	dueDate: Yup.string().required("Required!"),
});

const TaskCreateDialog = ({ isOpen, close }: TaskCreateDialogProps) => {
	const dispatch = useAppDispatch();
	const tasksLength = useAppSelector((state) => state.tasks.length);
	const formRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutsideOfForm = (event: MouseEvent) => {
			if (
				isOpen &&
				formRef.current &&
				!formRef.current.contains(event.target as Node)
			) {
				close();
			}
		};

		document.addEventListener("mousedown", handleClickOutsideOfForm);
		return () => {
			document.removeEventListener("mousedown", handleClickOutsideOfForm);
		};
	}, [close, isOpen]);

	const handleSubmit = (values: InitialValues) => {
		dispatch(addTask({ ...values, id: tasksLength + 1 }));
		close();
	};

	return (
		<>
			{isOpen ? (
				<div className="dialog">
					<div className="form" ref={formRef}>
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ errors, touched, isValid, dirty }) => (
								<Form>
									<h2 className="info">Add task</h2>
									<div className="info">* All fields are required</div>
									<label htmlFor="title">Title:</label>
									<Field id="title" name="title"></Field>
									<div className="error">
										{errors.title && touched.title ? errors.title : null}
									</div>
									<label htmlFor="description">Description:</label>
									<Field id="description" name="description"></Field>
									<div className="error">
										{errors.description && touched.description
											? errors.description
											: null}
									</div>
									<label htmlFor="dueDate">Due Date:</label>
									<Field
										type="date"
										id="dueDate"
										name="dueDate"
										min={formatedDate}
									></Field>
									<div className="error">
										{errors.dueDate && touched.dueDate ? errors.dueDate : null}
									</div>
									<button
										className={
											"btn submit-btn" +
											(!isValid || !dirty ? "" : " active-btn")
										}
										type="submit"
										disabled={!isValid || !dirty}
									>
										Submit
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			) : null}
		</>
	);
};

export default TaskCreateDialog;
