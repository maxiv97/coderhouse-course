import React, { useState } from 'react';
import './Item.css';
import addIcon from '../../assets/add.png';
import substractIcon from '../../assets/subtract.png';

const Item = ({title}) => {

    let [counter, setCounter] = useState(0);
    
    return (
    <div className='item'>
        <span className='item-title'>{title}</span>
        <div className='cart-buttons'>
            <img className='cart-button close' src={substractIcon} alt='substract' onClick={() => setCounter(counter === 0 ? counter : counter - 1)}/>
            <span className='display'>{counter}</span>
            <img className='cart-button' src={addIcon} alt='add' onClick={() => setCounter(counter + 1)}/>
        </div>
    </div>
)};

export default Item;