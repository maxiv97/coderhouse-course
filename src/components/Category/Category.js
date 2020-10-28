import React, { useState } from 'react';
import './Category.css';

const Category = ({id, title, handleCategoryClick}) => {

    let [customClass, setCustomClass] = useState('');

    return (
    <div className={`category ${customClass}`} onClick={() => handleCategoryClick(id)} onMouseOver={() => setCustomClass('isOver')} onMouseOut={() => setCustomClass('')}>
        <span className='category-title'>{title}</span>
    </div>
)};


export default Category;