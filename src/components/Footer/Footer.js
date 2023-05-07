import LogoAddress from '../../assets/location.jpg';
import LogoPhone from '../../assets/phone.jpg';
import LogoMail from '../../assets/mail.jpg';
import './Footer.css';
import React from 'react';
class Footer extends React.Component {
    render(){
        return (
            <div className="footer_container">
                <div>
                    <img className="logo_contact" src={LogoAddress} alt="Icono de ubicacion"></img>
                    <span className="text_contact">Medellin</span>
                </div>
                <div>
                    <img className="logo_contact" src={LogoPhone} alt="Icono de ubicacion"></img>
                    <span className="text_contact">01 8000 129 999</span>
                </div>
                <div>
                    <img className="logo_contact" src={LogoMail} alt="Icono de ubicacion"></img>
                    <span className="text_contact">ayuda@wompi.co</span>
                </div>
            </div>
        );
    }
}
export default Footer;