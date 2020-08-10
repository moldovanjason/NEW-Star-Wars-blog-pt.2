import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import Single from "./views/single";
import injectContext from "./store/appContext";
import { Planets } from "./views/planets";
import { PlanetsDetails } from "./views/planetsdetails";
import { Characters } from "./views/character";
import { CharactersDetails } from "./views/characterdetails";

import { Navbar } from "./components/navBar";
import { Footer } from "./components/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planetsdetails">
							<PlanetsDetails />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/charactersdetails">
							<CharactersDetails />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1 className="nf">***Page Not Found***</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
