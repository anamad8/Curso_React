import {useEffect, useState} from 'react'
import { Container} from 'react-bootstrap';
import './Productos.css';
import ItemList  from './ItemLisProductosMuejer';
import Api from '../../Apis/ApiMujer'


function ProductosMujer() {
    const [characters, setCharacters] = useState([]); // --> estado inicial

    const producto = new Promise(resolve => {
        setTimeout(function(){
            return resolve(Api); 
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
            <ItemList characters={characters}/>
        </Container>
    );
}

    export default ProductosMujer;
