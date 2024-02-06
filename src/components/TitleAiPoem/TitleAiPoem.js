import { askQuestion, assistantReply } from "../../Hooks/useAPI";
import { useEffect, useState } from "react";
import "./TitleAiPoem.css"

function TitleAiPoem() {
	const [assistantResponse, setAssistantResponse] = useState("");

	useEffect(() => {
		const userQuestion = "Tell me a quote from a color.";
		askQuestion(userQuestion)
			.then((assistantReply) => {
				setAssistantResponse(assistantReply);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);
	return (
		<div className="title-textAI">
			<h1>YOU COLORED ME TWICE!</h1>
			<br />
			<p>{assistantResponse?.length ? assistantResponse : "Wait a second..."}</p>
		</div>
		// <h1>{assistantResponse || 'Loading...'}</h1>
		// Or you can use like this
	);
}

export default TitleAiPoem;
