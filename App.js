import React from "react";
import ReactDOM from "react-dom";
import Container from "./src/components/Container/Container.js";
import Card from "./src/components/Card/Card.js";
import PersonIMG from "./src/images/image-tanya.jpg";

const people = [
	{
		img: PersonIMG,
		text:
			"\"I've been interested in coding for a while but never taken the jump, until now. I couldn't recom		      mend this course enough. I'm now in the job of my dreams and so excited about the future.\"",
		name: "Tanya Sinclair",
		job: "UX Engineer",
	},
];
function App() {
	return (
		<Container>
			{people.map((person, index) => (
				<Card
					key={index}
					personIMG={person.img}
					text={person.text}
					name={person.name}
					job={person.job}
				/>
			))}
		</Container>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
