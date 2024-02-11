import React, { useState } from "react";
import "./Domino.css";

function Domino(props) {
	const dominos = Array(props.bricks).fill(" ");
	const dominoBricks = document.querySelectorAll(`.${props.className}`);

	//turning speed
	for (let i = 0; i < dominoBricks.length; i++) {
		dominoBricks[i].style.transition = `var(--transition), transform ${.2}s ease-in`;
	}

	//customized loop with delay
	function handleMouseEnter() {
		//set index
		let i = 0;
		//create loop
		function myLoop() {
			setTimeout(function () {
				//how much each brick rotates
				dominoBricks[i].style.transform = `rotate(${15 + (70 - 15) - (i * i) / 2.5}deg)`;
				//increase index
				i++;

				//check if loop is done or not
				if (i < dominos.length) {
					myLoop();

					//if not: rotate all the bricks back
				} else {
					setTimeout(function () {
						for (let i = 0; i < dominoBricks.length; i++) {
							dominoBricks[i].style.transform = `rotate(0deg)`;
						}
					}, 1000);
				}
				//delay between each brick
			}, 60);
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
						className={`domino-brick ${props.className}`}
						key={index}
					></div>
				);
			})}
		</div>
	);
}

export default Domino;
