import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import SingleCharacter from "./views/SingleCharacter";
import injectContext from "./store/appContext";

import { NavbarTwo } from "./component/navbar";
import { Footer } from "./component/footer";

import SinglePlanet from "./views/SinglePlanet";
import SingleVehicle from "./views/SingleVehicle";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarTwo />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						{/* <Route exact path="/single/:theid">
							<Single />
						</Route> */}
						<Route exact path="/singlecharacter/:id">
							<SingleCharacter />
						</Route>
						<Route exact path="/singleplanet/:id">
							<SinglePlanet />
						</Route>
						<Route exact path="/singlevehicle/:id">
							<SingleVehicle />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
