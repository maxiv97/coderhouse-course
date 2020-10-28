import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';

const ItemListContainer = ({itemList, itemsWereFound}) => {

    const [addedItems, setAddedItems] = useState([]);
    
    const onAdd = (quantity, itemId) => {
        const hadPreviouslyAdded = itemAdded => itemAdded.itemId === itemId;

        if (addedItems.some(hadPreviouslyAdded)) {
            const newAddedItems = addedItems.map(item => {
                if (item.itemId === itemId) {
                    item.quantity = quantity;
                }
                return item;
            });

            setAddedItems([...newAddedItems]);
        } else {
            setAddedItems([...addedItems, {itemId, quantity}]);
        }
    };
    
    useEffect(() => {
        console.log('Items agregados: ', addedItems);
    });

    return (
        <>
            <h1>Productos disponibles:</h1>
            {!itemsWereFound && <span>Lo sentimos, no encontramos productos de esa categoría</span>}
            <div className='item-list-container'>
                {itemList.map(item => <Item key={item.id} title={item.title} stock={item.stock} itemId={item.id} onAddItem={onAdd}/>)}
            </div>
        </>
    )};

export default ItemListContainer;