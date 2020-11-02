import React from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({itemsWereFilteredByCategory}) => {
    return <ItemList itemsWereFilteredByCategory={itemsWereFilteredByCategory}/>
};

export default ItemListContainer;