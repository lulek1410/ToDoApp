import "./FaIconButton.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FaIconButtonProps {
	icon: IconProp;
	onClick: () => void;
}

const FaIconButton = ({ icon, onClick }: FaIconButtonProps) => {
	return (
		<button className="icon-btn" onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default FaIconButton;
