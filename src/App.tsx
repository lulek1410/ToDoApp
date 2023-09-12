import React from "react";
import "./App.css";
import Header from "./Header";
import TasksList from "./components/Main/TasksList";

function App() {
	return (
		<>
			<Header />
			<TasksList />
		</>
	);
}

export default App;
