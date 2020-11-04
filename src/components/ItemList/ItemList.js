import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import itemsMock from '../../mocks/items.json';

const ItemList = ({itemsWereFilteredByCategory, onItemClick}) => {
    const itemTask = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsMock.items);
        }, 2000);
    });

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        itemTask().then(itemsList => setItemList(itemsList));
    }, [])

    const [isItemsFilteredFounded, setIsItemsFilteredFounded] = useState(true);
    
    
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

    return (
        <>
            <h1>Productos disponibles:</h1>
            {!isItemsFilteredFounded && <span>Lo sentimos, no encontramos productos de esa categoría</span>}
            {itemList.length > 0 ? 
            (<div className='item-list'>
                {itemList.map(item => <Item key={item.id} item={item} onItemClick={onItemClick}/>)}
            </div>) : 
            (<h2>Loading...</h2>)}
        </>
    )};

export default ItemList;