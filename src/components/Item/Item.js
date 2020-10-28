import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({title, stock, itemId, onAddItem}) => {
    
    const onAdd = quantity => onAddItem(quantity, itemId);
    
    return (
    <div className='item'>
        <span className='item-title'>{title}</span>
        <ItemCount stock={stock} onAdd={onAdd}/>
    </div>
)};

export default Item;