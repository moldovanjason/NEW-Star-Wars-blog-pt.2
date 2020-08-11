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
							<button type="button" className="btn btn-primary" onClick={() => {}}>
								More Info
							</button>
							<button onClick={() => context.actions.addFavorite(props.name)}>
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
	keyIndex: PropTypes.number
};
