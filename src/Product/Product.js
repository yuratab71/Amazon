import React from 'react'
import style from './Product.module.css';

function Product({ title, image, price, rating }) {
    return (
        <div className={style.product}>
            <div className={style.product_info}>
                <p>{title}</p>
                <p className={style.product_price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={style.product_rating}>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>) )}
                </div>
            </div>
            <img 
                src={image} 
                alt="product image" 
            />

            <button>Add to basket</button>
        </div>
    )
}

export default Product;
