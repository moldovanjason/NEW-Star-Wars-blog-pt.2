import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../components/navBar";
import { Card } from "../components/card";
import { Planets } from "./planets";

//create your first component
export class Characters extends React.Component {
	constructor() {
		super();
		this.state = {
			char: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(characters => this.setState({ char: characters.results }));
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="charCards">
					{this.state.char.length > 1 ? (
						this.state.char.map((character, cardIndex) => {
							return <Card key={cardIndex} name={character.name} />;
						})
					) : (
						<h1>Loading...</h1>
					)}
					hello
				</div>
			</div>
		);
	}
}
