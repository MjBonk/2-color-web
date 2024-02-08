//npm install animejs --save
import anime from "animejs";
import "./StaggeringAnimation.css";

function StaggeringAnimation(props) {
	function handleMouseEnter() {
		anime({
			targets: ".staggeringAnimation .el",
			scale: [
				{ value: 0.1, easing: "easeOutSine", duration: 100 },
				{ value: 1, easing: "easeInOutQuad", duration: 100 },
			],
			delay: anime.stagger(50, { grid: [10, 10], from: "center" }),
		});
		return anime;
	}

	const squares = Math.round(props.squares / 4);
	const testarr = [];
	const opacity = ["10", "25", "45", "75", "100"];

	for (let i = 0; i < opacity.length; i++) {
		for (let j = 0; j < squares; j++) {
			testarr.push(`small square el squareOp-${opacity[i]}`);
		}
	}

	return (
		<div className="staggeringAnimation" onMouseEnter={handleMouseEnter}>
			{testarr.map((test, index) => (
				<div key={index} className={test}></div>
			))}
		</div>
	);
}

export default StaggeringAnimation;
