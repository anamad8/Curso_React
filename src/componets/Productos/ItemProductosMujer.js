// tengo que hacer el card

import React from 'react'
import {Card, Button} from 'react-bootstrap';
import ItemCouts from './ItemCouts';
import './Productos.css';


export const ItemProductosMujer = ({character}) => {

    return (
            <div className="productos">
                <Card className="producto"> 
                        <Card.Img variant="top" src={character.imagen} />
                        <Card.Body>
                            <Card.Title className="titulo"> {character.titel}</Card.Title>
                            <Card.Text>
                                <p className="precio">$ {character.price} </p>
                            </Card.Text>
                            <ItemCouts stock={5} initial={1}/> 
                            <Button variant="primary">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
            </div>
    )  
}  

export default ItemProductosMujer;