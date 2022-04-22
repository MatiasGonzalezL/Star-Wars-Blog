import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Container, Card, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../../styles/home.css';
import { Link } from 'react-router-dom';


export const CardCharacter = () => {
    const { store, actions } = useContext(Context);
    //const [data, setData] = useState({});
    const [favorites, setFavorites] = useState(false);


    return (
        <Container>
            <Row className='scrollable-row'>
                {store.characters.map((character, idx) => {
                    return (
                        <Card style={{ width: '18rem' }} className="m-3" key={idx}>
                            <Card.Img variant="top" src="http://placeimg.com/400/250/animals" />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>Un personaje del universo de Star Wars</Card.Text>

                                {/* <Card.Text>Altura: {character.height}</Card.Text>
                                <Card.Text>Género: {character.gender}</Card.Text>
                                <Card.Text>Peso: {character.mass}</Card.Text> */}

                                {/* //datos de prueba */}
                                <Card.Text>Uid: {character.uid}</Card.Text>
                                <Card.Text>Url: {character.url}</Card.Text>
                                <Link to={`/singlecharacter/${character.uid}`}>
                                    <Button variant="primary">See more details!</Button>
                                </Link>
                                <Button variant="light" className='botoncorazon' onClick={() => {actions.addFavorites(character.name)}}><FontAwesomeIcon icon={faHeart} className="corazon" /></Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    );
}
