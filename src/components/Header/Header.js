import Logo from '../../assets/logo-sm.png';
import './Header.css';
import React from 'react';
class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="header_page">
                    <img src={Logo} className="logo_market" alt="Logo Mini Market">

                    </img>
                    <div className="navbar_container">
                        <ul className="navbar">
                            <li key="home">
                                <a href='/'>Inicio</a>
                            </li>
                            <li key="info">
                                <a href='/info'>Quiénes somos</a>
                            </li>
                            <li key="contact">
                                <a href='/contact'>Contáctanos</a>
                            </li>   
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}
export default Header;