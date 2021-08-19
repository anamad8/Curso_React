// hace el map y por cada pasada retorna un <Item />

import React from 'react'
import './Productos.css';
import Item from './ItemProductosMujer'


export const ItemLisProductoMujer = ({characters}) => { // --> characters = [{}{}{}{}]

return(
    <div className="container1">
    {
        characters.map(character =>
            <Item character={character}/>
        )
    }
    </div>
    )

}


export default ItemLisProductoMujer;