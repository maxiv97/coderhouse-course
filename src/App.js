import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import CategoriesListContainer from './components/CategoriesList/CategoriesList';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <CategoriesListContainer/>
    </div>
  );
}

export default App;
