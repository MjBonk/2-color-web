import { useState, useEffect, useContext } from "react";
import { Context } from "../../ContextProvider";

function Cursor() {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const { isCopied } = useContext(Context);

	function handleCursorMove(e) {
		setCursorPosition({ x: e.clientX, y: e.clientY });
		console.log(isCopied)
	}

	useEffect(() => {
		window.addEventListener("mousemove", handleCursorMove);
		return () => {
			window.removeEventListener("mousemove", handleCursorMove);
		};
	}, []);

	return (
		<span
			style={{
				top: `${cursorPosition.y + 10}px`,
				left: `${cursorPosition.x + 15}px`,
				position: "fixed",
				backgroundColor: "var(--clr-primary)",
				color: "var(--clr-accent)",
				pointerEvents: "none",
				zIndex: "30000",
				padding: "0 .3em",
				fontFamily: "RR",
			}}
		>
			{isCopied ? "copied text" : ""}
		</span>
	);
}

export default Cursor;
