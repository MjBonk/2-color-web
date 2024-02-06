import { useContext, useEffect, useState } from "react";
import { Context } from "../../ContextProvider";
import chroma from "chroma-js";
import "./Button.css";
import Header from "../Header/Header";

function Button() {
	const [buttonText, setButtonText] = useState("START");
	const { mixColors, setMixColors, primaryColor, setColor, accentColor, resetToggles } = useContext(Context);

	function handleOnClick() {
		const section1Position = document.getElementById("section1").getBoundingClientRect();
		const section2Position = document.getElementById("section2").getBoundingClientRect();
		const section3Position = document.getElementById("section3").getBoundingClientRect();
		const header = document.querySelector(".header");
		const scrollDistance = document.documentElement.clientHeight;

		// go to page 2
		if (section1Position.top === 0) {
			window.scrollBy(0, scrollDistance);
			setButtonText("MIX");
			header.style.top = `-${header.getBoundingClientRect().height}px`;

			// go to page 3
		} else if (section2Position.top === 0) {
			window.scrollBy(0, scrollDistance);
			setButtonText("RESTART");
			header.style.top = "0px";
			// chroma mix API sets the primary color to the result of mixed colors
			setColor(chroma.mix(mixColors.one, mixColors.two).hex());

			// go to page 1
		} else if (section3Position.top === 0) {
			window.scrollTo(0, 0);
			setButtonText("START");
			setColor("#FFFFFF");
			resetToggles();

			const timeoutId = setTimeout(() => {
				setMixColors({ one: "#000000", two: "#FFFFFF" });
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}
	

	return (
		<button onClick={handleOnClick} className="main-button">
			{buttonText}
		</button>
	);
}

export default Button;
