import { askQuestion, assistantReply } from "../../../Hooks/useAPI";
import { useEffect, useState } from "react";
import "./TitleAiPoem.css";

function TitleAiPoem() {
	const [assistantResponse, setAssistantResponse] = useState(true);

	useEffect(() => {
		askQuestion(
			"Tell me something fun about color contrasts, like a poem or a fact that is no more than 200 characters long, end with a random hashtag and note that you are the author and ai no emojis"
		)
			.then((assistantReply) => {
				setAssistantResponse(assistantReply);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);
	return (
		<div className="title-textAI">
			<h1>CONTRASTS</h1>
			<p>
				{assistantResponse?.length
					? assistantResponse
					: "In vibrant hues, contrasts thrive, Colors dancing, so alive. Dark and light, they intertwine, Creating beauty so divine. Opposites attract, it's true, In red and green, or yellow-blue. Harmony in differences we find, A kaleidoscope for eyes, designed. #ColorContrastDelight #AIAssistant #NoEmojis"}
			</p>
		</div>
		// <h1>{assistantResponse || 'Loading...'}</h1>
		// Or you can use like this
	);
}

export default TitleAiPoem;
