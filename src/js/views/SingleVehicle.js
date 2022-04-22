import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Image} from "react-bootstrap";
import '../../styles/home.css';


export default function SingleVehicle() {
	//const [data, setData] = useState({});
	const [vehicle, setVehicle] = useState({});
	const {id} = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/starships/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setVehicle(data.result.properties);
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
								<h1>{vehicle.name}</h1>
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
						<p className="p2">{vehicle.name}</p>
					</div>
					<div className="col">
						<p>Modelo</p>
						<p className="p2">{vehicle.model}</p>
					</div>
					<div className="col">
						<p>Largo</p>
						<p className="p2">{vehicle.length}</p>
					</div>
					<div className="col">
						<p>Tripulación</p>
						<p className="p2">{vehicle.crew}</p>
					</div>
					<div className="col">
						<p>Pasajeros</p>
						<p className="p2">{vehicle.passengers}</p>
					</div>
					<div className="col">
						<p>Uso</p>
						<p className="p2">{vehicle.consumables}</p>
					</div>
					<div className="col">
						<p>Hipervelocidad</p>
						<p className="p2">{vehicle.hyperdrive_rating}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

// SingleVehicle.propTypes = {
// 	match: PropTypes.object
// };
