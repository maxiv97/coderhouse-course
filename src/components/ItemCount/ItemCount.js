import React, { useState } from 'react';
import increaseIcon from '../../assets/increase.png';
import substractIcon from '../../assets/subtract.png';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    let [counter, setCounter] = useState(0);
    let increaseButtonCustomClass = stock === counter ? 'disable-button' : '';
    let hasNoItemsCustomClass = counter === 0 ? 'disable-button' : '';

    const increase = () => counter < stock ? counter + 1 : counter;
    const substract = () => counter === 0 ? counter : counter - 1;

    const onSubstract = () => {
        if (counter > 0) {
            setCounter(substract());
        }
    }

    const onIncrease = () => {
        if (counter < stock) {
            setCounter(increase());
        }
    }

    return (
        <div className='item-count-container'>
            <div className='cart-buttons'>
                <img className={`cart-button ${hasNoItemsCustomClass}`} src={substractIcon} alt='substract' onClick={onSubstract}/>
                <span className='display'>{counter}</span>
                <img className={`cart-button ${increaseButtonCustomClass}`} src={increaseIcon} alt='increase' onClick={onIncrease}/>
            </div>
            <div>
                <span className={`add-button ${hasNoItemsCustomClass}`} onClick={ () => { if(counter !== 0) {onAdd(counter)}}}>Agregar</span>
            </div>
        </div>
    )
};

export default ItemCount;