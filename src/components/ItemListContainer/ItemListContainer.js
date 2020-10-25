import React from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';

const ItemListContainer = ({itemList, itemsWereFound}) => (
        <>
            <h1>Productos disponibles:</h1>
            {!itemsWereFound && <span>Lo sentimos, no encontramos productos de esa categoría</span>}
            <div className='item-list-container'>
                {itemList.map(item => <Item key={item.id} title={item.title} />)}
            </div>
        </>
    );

export default ItemListContainer;