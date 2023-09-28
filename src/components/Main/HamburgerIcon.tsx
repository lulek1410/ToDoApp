import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { toggleAsideMenu } from "../../store/reducers/asideSlice";
import "./HamburgerIcon.css";

const HamburgerIcon = () => {
	const active = useAppSelector((state) => state.aside.isOpen);
	const dispatch = useAppDispatch();

	return (
		<div
			id="hamburger-container"
			className={active ? "active" : ""}
			onClick={() => {
				dispatch(toggleAsideMenu());
			}}
		>
			<svg viewBox="0 0 148 126" xmlns="http://www.w3.org/2000/svg">
				<g id="hamburger">
					<g id="bar-1" filter="url(#filter0_d_3_9)">
						<path d="M4 10C4 4.47715 8.47715 0 14 0H131C136.523 0 141 4.47715 141 10V10C141 15.5228 136.523 20 131 20H14C8.47715 20 4 15.5228 4 10V10Z" />
					</g>
					<g id="bar-2" filter="url(#filter1_d_3_9)">
						<path d="M4 110C4 104.477 8.47715 100 14 100H131C136.523 100 141 104.477 141 110V110C141 115.523 136.523 120 131 120H14C8.47715 120 4 115.523 4 110V110Z" />
					</g>
					<g id="bar-3" filter="url(#filter2_d_3_9)">
						<path d="M4 60C4 54.4772 8.47715 50 14 50H131C136.523 50 141 54.4772 141 60V60C141 65.5228 136.523 70 131 70H14C8.47715 70 4 65.5228 4 60V60Z" />
					</g>
				</g>
				<defs>
					<filter
						id="filter0_d_3_9"
						x="0"
						y="0"
						width="145"
						height="28"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_3_9"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_3_9"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_d_3_9"
						x="1"
						y="97"
						width="147"
						height="30"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="2" dy="2" />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_3_9"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_3_9"
							result="shape"
						/>
					</filter>
					<filter
						id="filter2_d_3_9"
						x="1"
						y="47"
						width="147"
						height="30"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="2" dy="2" />
						<feGaussianBlur stdDeviation="2.5" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_3_9"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_3_9"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default HamburgerIcon;
