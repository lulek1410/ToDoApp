import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { Filter, setFilter } from "../../../store/reducers/asideSlice";
import "./Option.css";

interface OptionProps {
	name: string;
	selected: boolean;
}

const Option = ({ name, selected }: OptionProps) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(setFilter(name as Filter));
	};

	return (
		<li className="option">
			<div
				className={"text" + (selected ? " selected" : "")}
				onClick={handleClick}
			>
				{name}
			</div>
		</li>
	);
};

export default Option;
