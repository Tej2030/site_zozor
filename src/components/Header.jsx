import React from 'react';
import Navigation from './Navigation';




function Header() {
    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <img src="images/images_site/zozor_logo.png" alt="logo"/>
                    <h1>Zozor</h1>
                    <p>Carnets de voyage</p>
                </div>
                <Navigation />
            </header>
        </div>
    )

}

export default Header