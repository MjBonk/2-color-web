import { createContext, useState } from "react";

// We're exporting Context because this is what we use to reference when we want the access to
// the values in here. ex const { mixColors } = useContext(Context) <----- in the brackets
export const Context = createContext();

const calculateComplementaryColor = (hexColor) => {
	// Constructing the complementary hex color
	const rgb = hexColor
		.slice(1)
		.match(/.{1,2}/g)
		.map((hex) => parseInt(hex, 16));
	const complementaryRGB = rgb.map((value) => 255 - value);
	const complementaryHex = "#" + complementaryRGB.map((value) => value.toString(16).padStart(2, "0")).join("");
	return complementaryHex;
};

// here we create our variebles/function etc that we want acces to everywhere
function ContextProvider({ children }) {
	const [color, setColor] = useState("#ffffff");

	const [mixColors, setMixColors] = useState({
		one: "#000000",
		two: "#ffffff",
	});

	// state of toggles
	const [BW, setBW] = useState(false);
	const [invert, setInvert] = useState(false);

	let primaryColor = color;

	if (BW === true) {
		primaryColor = "#ffffff";
	}
	if (invert === true) {
		primaryColor = calculateComplementaryColor(primaryColor);
	}

	function resetToggles() {
		setBW(false);
		setInvert(false);
	}

	const accentColor = calculateComplementaryColor(primaryColor);
	document.documentElement.style.setProperty("--clr-primary", primaryColor);
	document.documentElement.style.setProperty("--clr-accent", accentColor);


	const [isCopied, setIsCopied] = useState(false);
	const onCopyHandler = () => {
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2500); // Hide the success message after 2.5 seconds
	};
	// here we put all the stuff if one varieble that we then pass as the value when returning the component,
	// instead of making multible "Context.Provider"
	const value = {
		mixColors,
		setMixColors,
		color,
		setColor,
		primaryColor,
		accentColor,
		
		BW,
		setBW,
		invert,
		setInvert,
		resetToggles,

		isCopied,
		setIsCopied,
		onCopyHandler,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
