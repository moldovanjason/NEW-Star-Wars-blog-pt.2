import React from "react";
import { Card } from "../components/card";

//create your first component
export class Planets extends React.Component {
	constructor() {
		super();
		this.state = {
			planets: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/planets/")
			.then(response => response.json())
			.then(planet => this.setState({ planets: planet.results }))
			.catch(err => console.log(err));
	}

	render() {
		var planetCards = null;
		if (this.state.planets.length > 1) {
			planetCards = this.state.planets.map((planet, cardIndex) => {
				return <Card key={cardIndex} name={planet.name} />;
			});
		} else {
			console.log("loading....");
		}

		return <div className="planetCards">{planetCards}</div>;
	}
}
