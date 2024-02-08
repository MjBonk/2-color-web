import React, { useState } from "react";
import "./Domino.css";

function Domino(props) {
	const dominos = Array(props.bricks).fill(" ");

	function handleMouseEnter() {
		let i = 0;
		function myLoop() {
			setTimeout(function () {
				document.querySelector(
					`.brick-${props.className}-${i}`
				).style.transform = `rotate(25deg)`;
				i++;
				if (i < dominos.length) {
					myLoop();
				} else {
					setTimeout(function () {
						for (
							let i = 0;
							i < document.querySelectorAll(`.domino-brick`).length;
							i++
						) {
							document.querySelectorAll(`.domino-brick`)[
								i
							].style.transform = `rotate(0deg)`;
						}
					}, 500);
				}
			}, 70);
		}
		myLoop();
	}

	return (
		<div className={`domino-box`} onMouseEnter={handleMouseEnter}>
			{dominos.map((domino, index) => {
				return (
					<div
						style={{
							backgroundColor: props.backgroundColor,
						}}
						className={`domino-brick brick-${props.className}-${index}`}
						key={index}
					></div>
				);
			})}
		</div>
	);
}

export default Domino;
