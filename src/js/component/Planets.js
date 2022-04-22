import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Container, Card, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../../styles/home.css';
import { Link } from 'react-router-dom';


export const CardPlanets = () => {
    const { store, actions } = useContext(Context);
    //const [data, setData] = useState({});
    const [favorite, setFavorites] = useState(false);


    return (
        <Container>
            <Row className='scrollable-row'>
                {store.planets.map((planet, idx) => {
                    return (
                        <Card style={{ width: '18rem' }} className="m-3" key={idx}>
                            <Card.Img variant="top" src="http://placeimg.com/400/250/animals" />
                            <Card.Body>
                                <Card.Title>{planet.name}</Card.Title>
                                <Card.Text>Un planeta del universo de Star Wars</Card.Text>

                                {/* <Card.Text>Gravedad: {planet.gravity}</Card.Text>
                                <Card.Text>Clima: {planet.climate}</Card.Text>
                                <Card.Text>Rotación: {planet.rotation}</Card.Text> */}

                                <Link to={`/singleplanet/${planet.uid}`}>
                                    <Button variant="primary">See more details!</Button>
                                </Link>
                                <Button variant="light" className='botoncorazon' onClick={() => {actions.addFavorites(planet.name)}}><FontAwesomeIcon icon={faHeart} className="corazon" /></Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    );
}
