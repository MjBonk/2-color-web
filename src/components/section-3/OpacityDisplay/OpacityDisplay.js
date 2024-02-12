//npm install animejs --save
import anime from "animejs";
import styles from "./OpacityDisplay.module.css";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import chroma from "chroma-js";
import CopyToClipboard from "react-copy-to-clipboard";

function OpacityDisplay(props) {
	const { primaryColor, accentColor, onCopyHandler } = useContext(Context);
	const squaresPerColor = Math.round(props.squares / props.colors);
	const mixHexAll = [];
	const hex = [];

	for (let i = 1; i < props.colors + 1; i++) {
		for (let j = 0; j < squaresPerColor; j++) {
			mixHexAll.push(chroma.mix(primaryColor, accentColor, (1 / props.colors) * i).hex());
		}
		hex.push(chroma.mix(primaryColor, accentColor, (1 / props.colors) * i).hex());
	}

	function handleMouseEnter() {
		anime({
			targets: `.${styles.square}`,
			scale: [
				{ value: 1.2, easing: "easeOutSine", duration: 200 },
				{ value: 1, easing: "easeInOutQuad", duration: 200 },
				{ value: 1.3, easing: "easeOutSine", duration: 200 },
				{ value: 1, easing: "easeInOutQuad", duration: 200 },
			],
			delay: anime.stagger(50, { grid: [10, 10], from: "center" }),
		});
		return anime;
	}

	return (
		<div className={styles.grid} onMouseEnter={handleMouseEnter}>
			<div className={styles.hex} style={{ gridTemplateRows: `repeat(${props.colors}, 1fr)` }}>
				{hex.map((hex, index) => (
					<CopyToClipboard text={hex} onCopy={onCopyHandler}>
						<p key={index} className={styles.hex__p}>
							{hex}
						</p>
					</CopyToClipboard>
				))}
			</div>
			{mixHexAll.map((hex, index) => (
				<div key={index} className={styles.square} style={{ backgroundColor: hex }}></div>
			))}
		</div>
	);
}

export default OpacityDisplay;
