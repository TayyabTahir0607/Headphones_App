import React from 'react';
import './Footer.css'; 

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mainFooter">

            <div className="upperFooter">
                <div className="topLeft">
                    ShopX
                </div>
                <div className="topRight">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>

            <div className="lowerFooter">
                <p>© {new Date().getFullYear()} ShopX. All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;