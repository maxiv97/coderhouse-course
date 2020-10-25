import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import itemsMock from './mocks/items.json';

const App = () => {
    const initialState = {
        itemList: itemsMock.items,
        itemsWereFound: true
    };

    const [itemListState, setItemListState] = useState(initialState);

    const onCategoryClick = id => {
        let filteredItems = itemsMock.items.filter(item => item.categoryId === id);

        setItemListState(filteredItems.length > 0 ? {itemList: filteredItems, itemsWereFound: true} : {itemList: itemsMock.items, itemsWereFound: false});
        console.log(itemListState);
    };

    return (
    <div className="App">
        <NavBar onCategoryClick={onCategoryClick}/>
        <ItemListContainer itemList={itemListState.itemList} itemsWereFound={itemListState.itemsWereFound}/>
    </div>
)};

export default App;
