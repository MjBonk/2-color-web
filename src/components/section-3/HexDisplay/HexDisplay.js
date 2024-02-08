import "./HexDisplay.css";
import { useContext, useRef } from "react";
import { Context } from "../../../ContextProvider";
import Domino from "../Domino/Domino";

function HexDisplay(props) {
	const { primaryColor, accentColor } = useContext(Context);
	const leftCurl = "{";
	const rightCurl = "}";

	return (
		<div className={props.className}>
			<h1>
				{props.className === "primary-hex-display" ? primaryColor : accentColor}
			</h1>
			<div className="hex-domino">
				<Domino
				bricks={13}
				className={props.className === "primary-hex-display" ? "primary_domino" : "accent_domino" }
					backgroundColor={
						props.className === "primary-hex-display" ? accentColor : primaryColor
					}
				/>
			</div>
			<p>.result {leftCurl} </p>
			<p>
				&nbsp;&nbsp;&nbsp;background-color:{" "}
				{props.className === "primary-hex-display" ? primaryColor : accentColor};{" "}
			</p>
			<p>
				&nbsp;&nbsp;&nbsp;color:{" "}
				{props.className === "primary-hex-display" ? accentColor : primaryColor};
			</p>
			<p>{rightCurl}</p>
		</div>
	);
}

export default HexDisplay;
