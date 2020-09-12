import React, { useState } from "react";
import IMGNext from "../../images/icon-next.svg";
import IMGPrev from "../../images/icon-prev.svg";
import PatternQuotes from "../../images/pattern-quotes.svg";
import PatternBG from "../../images/pattern-bg.svg";
import IMGCurve from "../../images/pattern-curve.svg";
import "./Card.css";

const Card = ({ people }) => {
	const [person, setPerson] = useState(people[0]);
	const [slideIndex, setSlide] = useState(1);

	const slider = (index) => {
		if (index > people.length) index = 1;
		else if (index < 1) index = people.length;
	 	
	 	setSlide(index);

		index -= 1;

		setPerson({
			name: people[index].name,
			job: people[index].job,
			text: people[index].text,
			img: people[index].img,
		});
	};

	return (
		<div className="card">
			<div className="card__text">
				<img src={PatternQuotes} alt="quotes" className="card__quotes-img" />
				<p className="card__paragraph">{person.text}</p>
				<div className="card__person">
					<span className="card__name">{person.name}</span>
					<span className="card__job">{person.job}</span>
				</div>
			</div>
			<div className="card__img">
				<img src={PatternBG} alt="bg" className="card__bg-img" />
				<div className="card__container-person-img">
					<img src={person.img} alt="person" className="card__person-img" />
					<div className="card__container-btn">
						<button
							className="card__btn card__btn--prev"
							onClick={() => slider(slideIndex - 1)}
						>
							<img src={IMGPrev} alt="prev" className="card__btn-img" />
						</button>
						<button
							className="card__btn card__btn--next"
							onClick={() => slider(slideIndex + 1)}
						>
							<img src={IMGNext} alt="next" className="card__btn-img" />
						</button>
					</div>
				</div>
			</div>
			<img src={IMGCurve} alt="Curve" className="card__curve-img" />
		</div>
	);
};

export default Card;
