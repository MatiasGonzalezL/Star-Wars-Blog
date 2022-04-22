import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Container, Card, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../../styles/home.css';
import { Link } from 'react-router-dom';


export const CardVehicles = () => {
    const { store, actions } = useContext(Context);
    //const [data, setData] = useState({});
    const [favorite, setFavorites] = useState(false);


    return (
        <Container>
            <Row className='scrollable-row'>
                {store.vehicles.map((vehicle, idx) => {
                    return (
                        <Card style={{ width: '18rem' }} className="m-3" key={idx}>
                            <Card.Img variant="top" src="http://placeimg.com/400/250/animals" />
                            <Card.Body>
                                <Card.Title>{vehicle.name}</Card.Title>
                                <Card.Text>Una nave del universo de Star Wars</Card.Text>

                                {/* <Card.Text>Largo: {vehicle.length}</Card.Text>
                                <Card.Text>Tripulación: {vehicle.crew}</Card.Text>
                                <Card.Text>Pasajeros: {vehicle.passengers}</Card.Text> */}

                                <Link to={`/singlevehicle/${vehicle.uid}`}>
                                    <Button variant="primary">See more details!</Button>
                                </Link>
                                <Button variant="light" className='botoncorazon' onClick={() => {actions.addFavorites(vehicle.name)}}><FontAwesomeIcon icon={faHeart} className="corazon" /></Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    );
}
