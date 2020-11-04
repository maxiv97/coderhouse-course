import React from 'react';
import './Item.css';
import ItemPicture from '../ItemPicture/ItemPicture';


const Item = ({item, onItemClick}) => {
    const {title, price, categoryId} = item;
    
    return (
    <div className='item' onClick={() => onItemClick(item)}>
        <ItemPicture width={'2.2em'} height={'2.2em'} categoryId={categoryId}/>
        <div className='item-info'>
            <span className='item-title'>{title}</span>
            <span> Precio: $ {price}</span>
        </div>
    </div>
)};

export default Item;