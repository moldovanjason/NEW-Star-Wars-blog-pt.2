import React, { Component } from "react";


export class PlanetsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			char: []
		};
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