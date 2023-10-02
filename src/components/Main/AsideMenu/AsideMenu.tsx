import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
	Filter,
	setFilter,
	toggleAsideMenu,
} from "../../../store/reducers/asideSlice";
import "./AsideMenu.css";
import Option from "./Option";

const filters = ["All", "To do", "Overdue", "Done"];

const AsideMenu = () => {
	const filter = useAppSelector((state) => state.aside.selectedFilter);
	const dispatch = useAppDispatch();
	const isMobile = useMediaQuery({ maxWidth: 600 });
	
	const handleClick = (name: string) => {
		dispatch(setFilter(name as Filter));
		if (isMobile) {
			dispatch(toggleAsideMenu());
		}
	};

	return (
		<aside className={isMobile ? "mobile" : ""}>
			<ul className="options-list">
				{filters.map((option, index) => (
					<Option
						key={index}
						name={option}
						selected={option === filter}
						onClick={() => {
							handleClick(option);
						}}
					/>
				))}
			</ul>
		</aside>
	);
};

export default AsideMenu;
