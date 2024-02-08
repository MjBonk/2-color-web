import "./ColorBox.css";
import { useContext, useState } from "react";
import { Context } from "../../../ContextProvider";
import Colorful from "@uiw/react-color-colorful";

function ColorBox(props) {
	const { mixColors, setMixColors } = useContext(Context);

	function handleOnChange(color) {
		setHsva(color.hsva);
		props.color === mixColors.one
			? setMixColors({ ...mixColors, one: color.hex })
			: setMixColors({ ...mixColors, two: color.hex });
	}

	const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
	return (
		<div className="color-box" style={{ backgroundColor: props.color }}>
			<Colorful color={hsva} disableAlpha={true} onChange={handleOnChange}/>
		</div>
	);
}

export default ColorBox;
