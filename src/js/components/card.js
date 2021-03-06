import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

//create your first component
export const Card = props => {
	return (
		<Context.Consumer>
			{context => {
				return (
					<div className="Card" key={props.keyIndex}>
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<p className="card-text">{props.name}</p>
							<button
								type="button"
								className="moreinfobutton btn btn-primary"
								onClick={() => props.history.push(`/charactersdetails/${props.index}`)}>
								More Info
							</button>
							<button className="likebutton" onClick={() => context.actions.addFavorite(props.name)}>
								<i className="fas fa-heart" />
							</button>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	keyIndex: PropTypes.number,
	history: PropTypes.object,
	index: PropTypes.number
};
