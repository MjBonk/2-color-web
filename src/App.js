import "./App.css";
import { useContext, useEffect } from "react";
import { Context } from "./ContextProvider";
//import the context we created

import Button from "./components/Button/Button";
import ColorBox from "./components/section-2/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import CircleText from "./components/section-1/CircleText/CircleText";
import TitleAiPoem from "./components/section-3/TitleAiPoem/TitleAiPoem";
import PlusSign from "./components/section-2/PlusSign/PlusSign";
import Toggle from "./components/section-3/Toggle/Toggle";
import Domino from "./components/section-3/Domino/Domino";
import StaggeringAnimation from "./components/section-3/StaggeringAnimation/StaggeringAnimation";
import HexDisplay from "./components/section-3/HexDisplay/HexDisplay";
import VerticalMarquee from "./components/section-3/VerticalMarquee/VerticalMarquee";
import FollowCircle from "./components/section-3/FollowCircle/FollowCircle";
import useDisableTouchScroll from "./Hooks/useDisableTouchScroll";

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
		<>
			<Header />
			<Button />
			<main>
				{/* _________________________________SECTION_1____________________________________________ */}
				<section id="section1" className="section1">
					<div className="section1__text-wrapper">
						<h1 className="section1__main-title">2 COLOR WEB</h1>
						<p>
							Introducing 2 Color Web – your go-to destination for crafting
							stunning two-color palettes. Simply choose two colors, and we'll
							unveil a primary hue along with its perfect contrasting accent
							shade. <br /> Say hello to the fun side of web color exploration
							with 2 Color Web!
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
					<HexDisplay className={"primary-hex-display"} />
					<HexDisplay className={"accent-hex-display"} />
					<div className="toggles">
						<Toggle value={BW} setValue={setBW} text={"B / W"} />
						<Toggle value={invert} setValue={setInvert} text={"SWITCH"} />
					</div>
					<div className="phone-domino">
						<Domino bricks={13} className={"phone-domino"} />
					</div>
					<TitleAiPoem />
					<StaggeringAnimation squares={50} />
					<FollowCircle />
				</section>
			</main>
		</>
	);
}

export default App;
