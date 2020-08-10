import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Card = props => {
	return (
		<div className="card" key={props.keyIndex} style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<p className="card-text">{props.name}</p>
				<p />
				<p />
				<p />
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	keyIndex: PropTypes.number
};
