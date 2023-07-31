import "./counter.scss";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = () => {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);
	console.log("rounded", rounded);
	useEffect(() => {
		const animation = animate(count, 200, { duration: 5 });
		return animation.stop;
	}, []);
	return <motion.h2>{}</motion.h2>;
};
export default Counter;
