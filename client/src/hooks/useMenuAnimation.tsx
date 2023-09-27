import { AnimationSequence, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const useMenuAnimation = (isOpen: boolean) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const menuAnimations = isOpen
			? [
					[
						"aside",
						{ width: "max(15%, 200px)" },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
					],
					[
						"li",
						{ transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
						{ delay: stagger(0.05), at: "-0.1" },
					],
				]
			: [
					[
						"li",
						{ transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
						{ delay: stagger(0.05, { from: "last" }), at: "<" },
					],
					[
						"aside",
						{ width: "0" },
						{ ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3, at: "-0.2" },
					],
				];

		animate([...(menuAnimations as AnimationSequence)]);
	}, [animate, isOpen, scope]);

	return scope;
};
