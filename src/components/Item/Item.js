import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({title, stock, itemId, price, onAddItem}) => {
    
    const onAdd = quantity => onAddItem(quantity, itemId);
    
    return (
    <div className='item'>
        <div className='item-info'>
            <span className='item-title'>{title}</span>
            <span> Precio: $ {price}</span>
            
        </div>
        <ItemCount stock={stock} onAdd={onAdd}/>
    </div>
)};

export default Item;