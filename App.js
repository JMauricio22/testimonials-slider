import React from "react";
import ReactDOM from "react-dom";
import Container from "./src/components/Container/Container.js";
import Card from "./src/components/Card/Card.js";
import PersonIMGTanya from "./src/images/image-tanya.jpg";
import PersonIMGJohn from "./src/images/image-john.jpg";

const people = [
	{
		img: PersonIMGTanya,
		text:"“I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend th		      is course enough. I'm now in the job of my dreams and so excited about the future. ”",
		name: "Tanya Sinclair",
		job: "UX Engineer",
	},
	{
		img: PersonIMGJohn,
		text:"“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instrut		      ors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
		name: " John Tarkpor",
		job: " Junior Front-end Developer",
	},
];
function App() {
	return (
		<Container>
			<Card people={people} />
		</Container>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
