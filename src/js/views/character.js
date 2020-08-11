import React from "react";
import "../../styles/home.scss";
import { Card } from "../components/card";

//create your first component
export class Characters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			char: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(response => response.json())
			.then(characters => this.setState({ char: characters.results }))
			.catch(err => console.log(err));
	}

	render() {
		console.log(this.props);
		return (
			<div className="container-fluid">
				<div className="charCards">
					{this.state.char.length > 1 ? (
						this.state.char.map((character, cardIndex) => {
							return <Card index={cardIndex} {...this.props} key={cardIndex} name={character.name} />;
						})
					) : (
						<h1 className="load">Loading...</h1>
					)}
				</div>
			</div>
		);
	}
}
