import Logo from '../../assets/logo-sm.png';
import './Header.css';
import { FiMenu } from 'react-icons/fi';
import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        menuExpanded : false
        };
        this.handleShowHamburger = this.handleShowHamburger.bind(this);
    }
    handleShowHamburger(){
        this.setState({
            menuExpanded: !this.state.menuExpanded
        });
    }
    render(){
        return (
            <div>
                <div className="header_page">
                    <img src={Logo} className="logo_market" alt="Logo Mini Market">
                    </img>
                    <div className="navbar_container">
                        <ul className={this.state.menuExpanded ?"navbar expanded":"navbar" }>
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
                    <button className="hamburger" onClick={this.handleShowHamburger}><FiMenu />
                    </button>
                </div>    
            </div>
        );
    }
}
export default Header;