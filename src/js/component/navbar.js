import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swlogo from "../../img/swlogo.jpg";
import { Container, Image } from "react-bootstrap";
import '../../styles/home.css';
import { Dropdown, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const NavbarTwo = () => {
	const { store, actions } = useContext(Context);
	//const [favorites, setFavorites] = useState([]);


	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<Container>
				<Link to="/">
					<Image src={swlogo} style={{ width: '5rem', height: '3rem' }} className="logostarwars" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<Dropdown>
							<Dropdown.Toggle variant="primary" id="dropdown-basic">
								Favorites <span className="badge bg-danger">{store.favorites.length}</span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{store.favorites.map((favorite, id) => {
									return (
										<>
											<Dropdown.Item key={id}>
												{favorite}
												<FontAwesomeIcon icon={faTrash} onClick={() => actions.deleteFavorites(favorite)} />
											</Dropdown.Item>
										</>
									)
								})}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</Container>
		</Navbar>
	);
};
