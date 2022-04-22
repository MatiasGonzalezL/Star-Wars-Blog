import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Image} from "react-bootstrap";
import '../../styles/home.css';


export default function SingleCharacter() {
	//const [data, setData] = useState({});
	const [character, setCharacter] = useState({});
	const {id} = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setCharacter(data.result.properties);
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
								<h1>{character.name}</h1>
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
						<p className="p2">{character.name}</p>
					</div>
					<div className="col">
						<p>Altura</p>
						<p className="p2">{character.height}</p>
					</div>
					<div className="col">
						<p>Peso</p>
						<p className="p2">{character.mass}</p>
					</div>
					<div className="col">
						<p>Color de pelo</p>
						<p className="p2">{character.hair_color}</p>
					</div>
					<div className="col">
						<p>Color de piel</p>
						<p className="p2">{character.skin_color}</p>
					</div>
					<div className="col">
						<p>Color de ojos</p>
						<p className="p2">{character.eye_color}</p>
					</div>
					<div className="col">
						<p>Género</p>
						<p className="p2">{character.gender}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};


// SingleCharacter.propTypes = {
// 	match: PropTypes.object
// };
