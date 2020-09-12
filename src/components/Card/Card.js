import React from "react";
import IMGNext from "../../images/icon-next.svg";
import IMGPrev from "../../images/icon-prev.svg";
import PatternQuotes from "../../images/pattern-quotes.svg";
import PatternBG from "../../images/pattern-bg.svg";
import IMGCurve from "../../images/pattern-curve.svg";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="card">
			<div className="card__text">
				<img src={PatternQuotes} alt="quotes" className="card__quotes-img" />
				<p className="card__paragraph">{props.text}</p>
				<div className="card__person">
					<span className="card__name">{props.name}</span>
					<span className="card__job">{props.job}</span>
				</div>
			</div>
			<div className="card__img">
				<img src={PatternBG} alt="bg" className="card__bg-img" />
				<div className="card__container-person-img">
					<img src={props.personIMG} alt="person" className="card__person-img" />
					<div className="card__container-btn">
						<button className="card__btn card__btn--prev">
							<img src={IMGPrev} alt="prev" className="card__btn-img" />
						</button>
						<button className="card__btn card__btn--next">
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
