import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import itemsMock from '../../mocks/items.json';

const ItemList = ({itemsWereFilteredByCategory}) => {
    const itemTask = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsMock.items);
        }, 2000);
    });

    const [itemList, setItemList] = useState([]);


    useEffect(() => {
        itemTask.then(itemsList => setItemList(itemsList));
    }, [itemTask])

    const [addedItems, setAddedItems] = useState([]);
    const [isItemsFilteredFounded, setIsItemsFilteredFounded] = useState(true);
    
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
        if (itemsWereFilteredByCategory !== -1) {
            let filteredItems = itemsMock.items.filter(item => item.categoryId === itemsWereFilteredByCategory);

            if (filteredItems.length > 0) {
                setIsItemsFilteredFounded(true);
            } else {
                setIsItemsFilteredFounded(false);
            }
    
            setItemList(filteredItems.length > 0 ? [...filteredItems] : itemsMock.items);
        } 
    }, [itemsWereFilteredByCategory]);

    useEffect(() => {
        console.log('Items agregados: ', addedItems);
    });

    return (
        <>
            <h1>Productos disponibles:</h1>
            {!isItemsFilteredFounded && <span>Lo sentimos, no encontramos productos de esa categoría</span>}
            {itemList.length > 0 ? 
            (<div className='item-list'>
                {itemList.map(item => <Item key={item.id} title={item.title} stock={item.stock} itemId={item.id} price={item.price} onAddItem={onAdd}/>)}
            </div>) : 
            (<h2>Loading...</h2>)}
        </>
    )};

export default ItemList;