import axios from "axios";
import "./App.css";
import Header from "./Header";
import MainView from "./components/Main/MainView";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { loadTasks } from "./store/reducers/tasksSlice";
import { useEffect } from "react";

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		axios
			.get("https://todoapp-4po6.onrender.com/tasks")
			.then((resp) => {
				dispatch(loadTasks(resp.data));
			})
			.catch((_) => {});
	}, []);
	return (
		<>
			<Header />
			<MainView />
		</>
	);
}

export default App;
