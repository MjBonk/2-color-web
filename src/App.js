import "./App.css";
import { useContext, useEffect } from "react";
import { Context } from "./ContextProvider";
import useDisableTouchScroll from "./Hooks/useDisableTouchScroll";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
// section1/2
import CircleText from "./components/section-1/CircleText/CircleText";
import ColorBox from "./components/section-2/ColorBox/ColorBox";
import PlusSign from "./components/section-2/PlusSign/PlusSign";
// section 3
import TitleAiPoem from "./components/section-3/TitleAiPoem/TitleAiPoem";
import Toggle from "./components/section-3/Toggle/Toggle";
import Domino from "./components/section-3/Domino/Domino";
import OpacityDisplay from "./components/section-3/OpacityDisplay/OpacityDisplay";
import HexDisplay from "./components/section-3/HexDisplay/HexDisplay";
import VerticalMarquee from "./components/section-3/VerticalMarquee/VerticalMarquee";
import FollowCircle from "./components/section-3/FollowCircle/FollowCircle";

function App() {
	useDisableTouchScroll();
	// saying we want to use the varieble color etc from context
	const { mixColors, BW, setBW, invert, setInvert, accentColor, primaryColor } = useContext(Context);
	// window.disableTouchScroll();

	// relod the page make the scroll go up
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Header />
			<Button />
			{/* _________________________________SECTION_1____________________________________________ */}
			<section id="section1" className="section1">
				<div className="section1__text-wrapper">
					<h1 className="section1__main-title">2 COLOR WEB</h1>
					<p>
						Introducing 2 Color Web – your go-to destination for crafting stunning
						two-color palettes. Simply choose two colors, and we'll unveil a primary
						hue along with its perfect contrasting accent shade. <br /> Say hello to
						the fun side of web color exploration with 2 Color Web!
						<br />
						<br />
						<span>
							<b>How you do it, it's as easy as 1, 2, 3.</b>
							<br />
							<b>1:</b> Press start
							<br /> <b>2:</b> Choose 2 colors to mix
							<br /> <b>3:</b> Press mix and enjoy the result
						</span>
					</p>
				</div>
				<CircleText />
			</section>

			{/* _________________________________SECTION_2____________________________________________ */}
			<section id="section2" className="section2">
				<ColorBox color={mixColors.one} />
				<PlusSign />
				<ColorBox color={mixColors.two} />
			</section>

			{/* _________________________________SECTION_3____________________________________________ */}
			<section id="section3" className="section3">
				<VerticalMarquee />
				<HexDisplay hexDisplay={"primary"} />
				<HexDisplay hexDisplay={"accent"} />
				<div className="toggles">
					<Toggle value={BW} setValue={setBW} text={"B / W"} />
					<Toggle value={invert} setValue={setInvert} text={"SWITCH"} />
				</div>
				<div className="phone-domino">
					<Domino bricks={13} className={"phone-domino__brick"} />
				</div>
				<TitleAiPoem />
				<OpacityDisplay squares={60} colors={5} />
				<FollowCircle />
			</section>
		</main>
	);
}

export default App;
