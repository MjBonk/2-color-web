import styles from "./HexDisplay.module.css";
import { useContext, useState } from "react";
import { Context } from "../../../ContextProvider";
import Domino from "../Domino/Domino";
import CopyToClipboard from "react-copy-to-clipboard";

function HexDisplay(props) {
	const { primaryColor, accentColor, onCopyHandler } = useContext(Context);
	const leftCurl = "{";
	const rightCurl = "}";

	return (
		<div className={`${styles.containers} ${styles[props.hexDisplay]}`}>
			<CopyToClipboard
				text={props.hexDisplay === "primary" ? primaryColor : accentColor}
				onCopy={onCopyHandler}
			>
				<h1>{props.hexDisplay === "primary" ? primaryColor : accentColor}</h1>
			</CopyToClipboard>
			<div className={styles.containers__domino}>
				<Domino
					bricks={13}
					className={props.hexDisplay === "primary" ? "primary_domino" : "accent_domino"}
					backgroundColor={props.hexDisplay === "primary" ? accentColor : primaryColor}
				/>
			</div>
			<p>
				.result {leftCurl} <br />
				&nbsp;&nbsp;&nbsp;background-color:{" "}
				{props.hexDisplay === "primary" ? primaryColor : accentColor}; <br />
				&nbsp;&nbsp;&nbsp;color: {props.hexDisplay === "primary" ? accentColor : primaryColor};
				<br />
				{rightCurl}
			</p>
		</div>
	);
}

export default HexDisplay;
