import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({itemsWereFilteredByCategory, onItemClick}) => {
    return <ItemList itemsWereFilteredByCategory={itemsWereFilteredByCategory} onItemClick={onItemClick}/>
};

export default ItemListContainer;