import React from 'react';
import './ItemPicture.css';
import categoryMock from '../../mocks/categories.json';

const ItemPicture = ({width, height, categoryId}) => {

    const category = categoryMock.categories.find(categoryData => categoryData.id === categoryId);

    const name = category.title;

    return <div className={`item-picture ${name}`} style={{width, height}}/>;
};

export default ItemPicture;