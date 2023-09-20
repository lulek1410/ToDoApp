import "./MainView.css";
import AsideMenu from "./AsideMenu/AsideMenu";
import TasksList from "./TasksList/TasksList";
import HamburgerIcon from "./HamburgerIcon";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useMenuAnimation } from "../../hooks/useMenuAnimation";

const MainView = () => {
	const isOpen = useAppSelector((state) => state.aside.isOpen);
	const scope = useMenuAnimation(isOpen);

	return (
		<main className="main-view" ref={scope}>
			<div className="hamburger-icon">
				<HamburgerIcon />
			</div>
			<AsideMenu />
			<TasksList />
		</main>
	);
};

export default MainView;
