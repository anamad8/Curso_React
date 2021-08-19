import React from 'react'
import './Productos.css';
import ItemHombre from './ItemProductosHombre'


export const ItemLisProductosHombre = ({characters}) => { // --> characters = [{}{}{}{}]

return(
    <div className="container1">
    {
        characters.map(character =>
            <ItemHombre character={character}/>
        )
    }
    </div>
    )

}


export default ItemLisProductosHombre;