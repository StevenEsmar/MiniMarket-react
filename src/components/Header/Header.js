import Logo from '../../assets/logo-sm.png';
import './Header.css';

const Header=() => {
    return (
        <div>
            <div className="header_page">
                <img src={Logo} className="logo_market" alt="Logo Mini Market">

                </img>
                <div className="navbar_container">
                    <ul className="navbar">
                        <li>
                            Inicio
                        </li>
                        <li>
                            Quienes somos
                        </li>
                        <li>
                            Contactanos
                        </li>   
                    </ul>
                </div>
            </div>    
        </div>
    );
}
export default Header;