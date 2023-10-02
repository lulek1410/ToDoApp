import "./Option.css";

interface OptionProps {
	name: string;
	selected: boolean;
	onClick: () => void;
}

const Option = ({ name, selected, onClick }: OptionProps) => {
	return (
		<li className="option">
			<div
				className={"text" + (selected ? " selected" : "")}
				onClick={onClick}
			>
				{name}
			</div>
		</li>
	);
};

export default Option;
