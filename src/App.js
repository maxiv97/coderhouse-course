import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {


    const [itemsWereFilteredByCategory, setItemsWereFilteredByCategory] = useState(-1);
    const onCategoryClick = categoryFilteredId => setItemsWereFilteredByCategory(categoryFilteredId);

    return (
    <div className="App">
        <NavBar onCategoryClick={onCategoryClick}/>
        <ItemListContainer itemsWereFilteredByCategory={itemsWereFilteredByCategory}/>
    </div>
)};

export default App;
