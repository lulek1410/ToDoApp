import "./TaskCreateDialog.css";
import { useEffect, useRef } from "react";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "./../../../hooks/useAppDispatch";
import { addTask, editTask } from "./../../../store/reducers/tasksSlice";
import { useAppSelector } from "./../../../hooks/useAppSelector";
import { closeDialog } from "./../../../store/reducers/dialogSlice";
import { motion } from "framer-motion";
import { getCurrentDate } from "../../../utils/getCurrentDate";

interface InitialValues {
	title: string;
	description: string;
	dueDate: string;
}

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Required!"),
	description: Yup.string().required("Required!").max(600),
	dueDate: Yup.string().required("Required!"),
});

const TaskCreateDialog = () => {
	const dispatch = useAppDispatch();
	const dialogData = useAppSelector((state) => state.dialog.dialogData);
	const tasksLength = useAppSelector((state) => state.tasks.length);
	const formRef = useRef<HTMLDivElement | null>(null);
	const today = getCurrentDate();
	const initialValues: InitialValues = {
		title: dialogData?.title ?? "",
		description: dialogData?.description ?? "",
		dueDate: dialogData?.dueDate ?? today,
	};
	const minDate = dialogData
		? dialogData.dueDate.localeCompare(today) === 1
			? today
			: dialogData.dueDate
		: today;

	useEffect(() => {
		const handleClickOutsideOfForm = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				dispatch(closeDialog());
			}
		};

		document.addEventListener("mousedown", handleClickOutsideOfForm);
		return () => {
			document.removeEventListener("mousedown", handleClickOutsideOfForm);
		};
	}, [dispatch]);

	const handleSubmit = (values: InitialValues) => {
		dialogData?.id
			? dispatch(
					editTask({
						...values,
						id: dialogData.id,
						overdueDays: dialogData.overdueDays,
						done: dialogData.done,
					})
			  )
			: dispatch(
					addTask({
						...values,
						id: tasksLength + 1,
						overdueDays: 0,
						done: false,
					})
			  );
		dispatch(closeDialog());
	};

	return (
		<motion.div
			initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
			animate={{ opacity: 1, backdropFilter: "blur(5px)" }}
			exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
			className="dialog"
		>
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
							<Field
								id="description"
								name="description"
								component="textarea"
								rows="6"
							></Field>
							<div className="info max-char-count">* max char count: 600</div>
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
								min={minDate}
							></Field>
							<div className="error">
								{errors.dueDate && touched.dueDate ? errors.dueDate : null}
							</div>
							<button
								className={
									"btn submit-btn" + (!isValid || !dirty ? "" : " active-btn")
								}
								type="submit"
								disabled={!isValid || !dirty}
							>
								Save
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</motion.div>
	);
};

export default TaskCreateDialog;
