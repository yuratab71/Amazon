import React from 'react'
import style from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className={style.header}>
            <img className={style.header_logo}
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />

            <div className={style.header_search}>
                <input 
                    className={style.header_searchInput}
                    type="text"
                />
                <SearchIcon className={style.header_searchIcon}/>
            </div>

            <div className={style.header_nav}>
                <div className={style.header_option}>
                    <span className={style.header_optionOne}>Hello Guest</span>    
                    <span className={style.header_optionTwo}>Sign in</span>
                </div>
                <div className={style.header_option}>
                <span className={style.header_optionOne}>Returns</span>    
                    <span className={style.header_optionTwo}>&Orders</span>
                </div>
                <div className={style.header_option}>
                <span className={style.header_optionOne}>Your</span>    
                    <span className={style.header_optionTwo}>Prime</span>
                </div>
                <div className={style.header_optionBasket}>
                    <ShoppingBasketIcon />
                    <span className={`${style.header_optionTwo} ${style.header_basketCount}`}>0</span>
                </div>
            </div>

        </div>
    )
}

export default Header;
