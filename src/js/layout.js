import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import injectContext from "./store/appContext";
import { Planets } from "./views/planets";
import { PlanetsDetails } from "./views/planetsDetails";
import { Characters } from "./views/character";
import { CharactersDetails } from "./views/characterDetails";
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
						<Route exact path="/" component={Characters} />
						<Route exact path="/characters" component={Characters} />
						<Route exact path="/planets" component={Planets} />
						<Route exact path="/planetsdetails/:id" component={PlanetsDetails} />
						<Route exact path="/charactersdetails/:id" component={CharactersDetails} />
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
///