import React, { Component } from "react";
import PropTypes from "prop-types";

export class CharactersDetails extends React.Component {
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
		console.log(this.state);
		return <div className="container-fluid">Hello</div>;
	}
}
CharactersDetails.propTypes = { match: PropTypes.object };

export default CharactersDetails;
