import React from 'react';
import './header.scss';
import Button from '../button/Button';

class Header extends React.Component {
    render() {
        return(
            <header className="justify-content-between">
                <div className="logo">
                    <a href="#.">
                        <img src="/app/assets/logo1.svg" alt="logo" />
                    </a>
                </div>
                <div className="navigation">
                    <a href="/" className="navLink active">HOME</a>
                    <a href="/about" className="navLink">ABOUT US</a>
                    <a href="/elements" className="navLink">ELEMENTS</a>
                    <a href="/faq" className="navLink">FAQ</a>
                    <Button classNames="regular-size btn-empty" value="Sign Up"/>
                </div>
            </header>
        );
    }
}

export default Header;
