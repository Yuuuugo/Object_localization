import React from 'react';
import PropTypes from 'prop-types';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className = "container header_container">
                <h4>
                    Hello this object localization project was created by
                </h4>
                <h1> GABRIELIDIS Hugo & Safwane Benidir</h1>

            </div>
            <div className = 'description'>

                <p> Description : In this project you input an image and the output will be the same image with box and label for each 
                object our deep learning model has identified </p>
            </div>

        </header>
    );
};


export default Header;