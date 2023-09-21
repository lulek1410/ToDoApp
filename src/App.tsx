import "./App.css";
import Header from "./Header";
import MainView from "./components/Main/MainView";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { updateTasks } from "./store/reducers/tasksSlice";

function App() {
	const dispatch = useAppDispatch();
	dispatch(updateTasks());

	return (
		<>
			<Header />
			<MainView />
		</>
	);
}

export default App;
