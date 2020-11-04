import React from 'react';
import './ItemDetailContainer.css';
import ItemPicture from '../ItemPicture/ItemPicture';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = ({item, onAddItem}) => {
    const {title, stock, itemId, price, categoryId} = item;

    const onAdd = quantity => onAddItem(quantity, itemId);

    return (
        <div className='item-detail-container'>
            <div className='picture-container'>
                <ItemPicture width={'8em'} height={'8em'} categoryId={categoryId}/>
            </div>
            <div className='item-info'>
                <span className='item-detail-title'>{title}</span>
                <span className='item-detail-price'>Precio: $ {price}</span>
                <div className='item-detail-buttons-container'>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    <span className='purchase-button'>Comprar</span>
                </div>
            </div>
        </div>
    )
};

export default ItemDetailContainer;
