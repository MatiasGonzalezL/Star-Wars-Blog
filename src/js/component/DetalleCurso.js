import React, {useContext, useState} from 'react';
import {Context} from '../store/appContext';
import { Container, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import '../../styles/home.css';


export const DetalleCurso = () => {
    const {store, actions} = useContext(Context);
    const [data, setData] = useState({});
    const [favorite, setFavorites] = useState(false);


    return(
        <Container>
           
        </Container>
    );
}
