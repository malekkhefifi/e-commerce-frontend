import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("shop");
    const [selectedLanguage, setSelectedLanguage] = useState("fr"); // Default language set to French

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles['nav-logo']}>
                <img
                    src="https://mixtape.ie/wp-content/uploads/2023/09/shopper-1024x912.png"
                    alt="Logo ChicShop"
                />
                <p>ChicShop</p>
            </div>

            {/* Menu de navigation */}
            <ul className={styles['nav-menu']}>
                <li
                    onClick={() => handleMenuClick("shop")}
                    className={activeMenu === "shop" ? styles.active : ""}
                >
                    <Link to="/" className={styles['nav-link']}>Shop</Link>
                </li>
                <li
                    onClick={() => handleMenuClick("mens")}
                    className={activeMenu === "mens" ? styles.active : ""}
                >
                    <Link to="/men" className={styles['nav-link']}>Men</Link>
                </li>
                <li
                    onClick={() => handleMenuClick("womens")}
                    className={activeMenu === "womens" ? styles.active : ""}
                >
                    <Link to="/women" className={styles['nav-link']}>Women</Link>
                </li>
                <li
                    onClick={() => handleMenuClick("kids")}
                    className={activeMenu === "kids" ? styles.active : ""}
                >
                    <Link to="/kids" className={styles['nav-link']}>Kids</Link>
                </li>
            </ul>

            {/* Section de connexion, panier, et langue */}
            <div className={styles['nav-login-cart']}>
            
                {/* Language Dropdown */}
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className={styles['nav-country-dropdown']}
                >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="it">Italiano</option>
                </select>
                {/* Login Button */}
                <Link to="/login">
                    <button className={styles['nav-login-button']}>Login</button>
                </Link>

                {/* Cart Icon */}
                <Link to="/cart">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
                        alt="Cart Icon"
                        className={styles['nav-cart-icon']}
                    />
                </Link>

                {/* Cart Count */}
                <div className={styles['nav-cart-count']}>0</div>
            </div>
        </div>
    );
};

export default Navbar;













