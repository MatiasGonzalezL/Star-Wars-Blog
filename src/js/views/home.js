import React from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/People";
import { CardPlanets } from "../component/Planets";
import { CardVehicles } from "../component/Vehicles";

export const Home = () => {




	return (
		<div className="text-center mt-5 p-1">
			<h1>Personajes</h1>
			<div className="horizontal-scrollable">
				<div className="row">
					<CardCharacter />
				</div>
			</div>
			<h1>Planetas</h1>
			<div className="horizontal-scrollable">
				<div className="row">
					<CardPlanets />
				</div>
			</div>
			<h1>Naves</h1>
			<div className="horizontal-scrollable">
				<div className="row">
					<CardVehicles />
				</div>
			</div>
		</div>
	);
};
