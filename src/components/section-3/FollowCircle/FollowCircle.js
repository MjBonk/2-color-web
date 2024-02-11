import { motion } from "framer-motion";
import styles from "./FollowCircle.module.css";
import { useState, useRef, useEffect } from "react";

function FollowCircle() {
	const [point, setPoint] = useState({ x: 0, y: 0 });
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current) return;
		const handlePointerMove = ({ clientX, clientY }) => {
			const childEl = ref.current;
			const parentEl = childEl.parentElement;
			const x = Math.max(
				0,
				Math.min(
					clientX - parentEl.offsetLeft - childEl.offsetWidth / 2,
					parentEl.offsetWidth - childEl.offsetWidth
				)
			);
			const y = Math.max(
				0,
				Math.min(
					clientY - parentEl.offsetTop - childEl.offsetHeight / 2,
					parentEl.offsetHeight - childEl.offsetHeight
				)
			);
			setPoint({ x, y });
		};
		window.addEventListener("pointermove", handlePointerMove);
		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, [ref]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.circle}>
				<motion.div
					ref={ref}
					className={styles.ball}
					animate={{ x: point.x, y: point.y }}
					transition={{
						type: "spring",
						damping: 3,
						stiffness: 50,
						restDelta: 0.001,
					}}
				/>
			</div>
		</div>
	);
}
export default FollowCircle;
