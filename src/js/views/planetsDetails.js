import React, { Component } from "react";
import PropTypes from "prop-types";

export class PlanetsDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			character: {}
		};
	}
	componentDidMount() {
		fetch(`"https://swapi.dev/api/people/"${this.props.match.params.id}`)
			.then(response => response.json())
			.then(characters => this.setState({ character: characters }));
	}

	render() {
		return <div className="container-fluid">Hello</div>;
	}
}

PlanetsDetails.propTypes = { match: PropTypes.object };
