import React from 'react';

const NavigationMenu = () => (
    <div className="navigation-menu__container">
        <ul className="navigation-menu__nav">
            <li>
                Acerca de mi
            </li>
            <li>
                <a href="#portfolio-widget__container">
                    Portafolio
                </a>
            </li>
            <li>
                <a href="CVLUISPEREZ.pdf" download>Descarga mi CV</a>
            </li>
        </ul>
        <div className="navigation-menu__contact-container">
            <a href="mailto:luisemp9426@gmail.com">Contactame</a>
        </div>
    </div>
);

export default NavigationMenu;
