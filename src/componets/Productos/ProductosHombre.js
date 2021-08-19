import {useEffect, useState} from 'react'
import { Container} from 'react-bootstrap';
import './Productos.css';
import ItemListHombre  from './ItemLisProductosHombre';
import ApiHombre from '../../Apis/ApiHombre'


function ProductosHombre() {
    const [characters, setCharacters] = useState([]); // --> estado inicial

    const producto = new Promise(resolve => {
        setTimeout(function(){
            return resolve(ApiHombre); 
        }, 1000);
    });

    useEffect(() => {

        producto.then( (res) => {

            setCharacters(res) // --> Aqui agregamos valor en el estado => estado = api

        } )
    },[]);

    producto.then(console.log);

    return (
        <Container>
            <ItemListHombre characters={characters}/>
        </Container>
    );
}

    export default ProductosHombre;
