import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./AsideMenu.css";
import Option from "./Option";

const filters = ["All", "To do", "Overdue", "Done"];

const AsideMenu = () => {
	const filter = useAppSelector((state) => state.aside.selectedFilter);
	const isMobile = useMediaQuery({ maxWidth: 600 });

	return (
		<aside className={isMobile ? "mobile" : ""}>
			<ul className="options-list">
				{filters.map((option, index) => (
					<Option key={index} name={option} selected={option === filter} />
				))}
			</ul>
		</aside>
	);
};

export default AsideMenu;
