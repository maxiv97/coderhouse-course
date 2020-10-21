import React from 'react';
import './Category.css';

const Category = ({id, isClicked, title, handleCategoryClick}) => (
    <div className='category' onClick={() => handleCategoryClick(id)}>
        <span className='category-title'>{title}</span>
        <input className='category-checkbox' type='checkbox' defaultChecked={isClicked}/>
    </div>
);


export default Category;