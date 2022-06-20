import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Detail } from "./views/detail";
import { DetailPlanet } from "./views/detailPlanet";
import { Character } from "./component/character";
import { Planet } from "./component/planet";
import injectContext from "./store/appContext";

import Card from "./views/cardCharacter";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/card">
							<Card />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/detail/:id">
							<Detail />
						</Route>
						<Route exact path="/detailPlanets/:id">
							<DetailPlanet />
						</Route>
						<Route exact path="/character">
							<Character />
						</Route>
						<Route exact path="/planet">
							<Planet />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
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
