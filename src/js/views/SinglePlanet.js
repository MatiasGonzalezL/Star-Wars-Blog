import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Image} from "react-bootstrap";
import '../../styles/home.css';


export default function SinglePlanet() {
	//const [data, setData] = useState({});
	const [planet, setPlanet] = useState({});
	const {id} = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setPlanet(data.result.properties);
				console.log(data);
			});
	}, []);


	return (
		<Container>
			<div className="row">
				<div className="col-6">
					<Image src="http://placeimg.com/600/400/animals" variant="top" />
				</div>
				<div className="col-6">
					<div className="row">
						<div className="col">
							<div className="text-center">
								<h1>{planet.name}</h1>
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<p>
						Lorem ipsum dolor sit amet. In perferendis eum placeat natus eos nihil praesentium qui suscipit atque. Eum voluptas reprehenderit quo sunt quae nam nihil quaerat sed omnis doloribus. Qui perferendis sapiente et sapiente quibusdam qui magnam voluptates qui deserunt quam. 						Lorem ipsum dolor sit amet. In perferendis eum placeat natus eos nihil praesentium qui suscipit atque. Eum voluptas reprehenderit quo sunt quae nam nihil quaerat sed omnis doloribus. Qui perferendis sapiente et sapiente quibusdam qui magnam voluptates qui deserunt quam.

						</p>
					</div>
				</div>

				<hr className="my-4" />

				<div className="row">
					<div className="col">
						<p>Nombre</p>
						<p className="p2">{planet.name}</p>
					</div>
					<div className="col">
						<p>Diámetro</p>
						<p className="p2">{planet.diameter}</p>
					</div>
					<div className="col">
						<p>Gravedad</p>
						<p className="p2">{planet.gravity}</p>
					</div>
					<div className="col">
						<p>Población</p>
						<p className="p2">{planet.population}</p>
					</div>
					<div className="col">
						<p>Clima</p>
						<p className="p2">{planet.climate}</p>
					</div>
					<div className="col">
						<p>Terreno</p>
						<p className="p2">{planet.terrain}</p>
					</div>
					<div className="col">
						<p>Superficie de agua</p>
						<p className="p2">{planet.surface_water}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

// SinglePlanet.propTypes = {
// 	match: PropTypes.object
// };
