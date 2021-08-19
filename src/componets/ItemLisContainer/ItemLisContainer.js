import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';
import imgMujer from '../Img/mujer.jpg'
import imgHombre from '../Img/hombre.jpg'
import './ItemLisConteiner.css';


export const ItemLisContainer = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="d-flex flex-row bd-higlight mb-3 marco">
                <Col className="container-fluid p-2 bd-higlight mujerHombre"><a href="#"><img src={ imgMujer } /></a> </Col>
                <Col className="container-fluid p-2 bd-higlight mujerHombre"><a href="#"><img src={ imgHombre } /></a> </Col>
            </Row>
        </Container>
    )
}




