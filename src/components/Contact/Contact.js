import './Contact.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Contact extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="container_info">
                    <div>
                        <h1>
                            Ubicación
                        </h1>
                        <span className="text_contact">Medellin</span>
                    </div>
                    <div>
                        <h1>
                            Teléfono
                        </h1>
                        <span className="text_contact">01 8000 129 999</span>
                    </div>
                    <div>
                        <h1>
                            Correo electrónico
                        </h1>
                        <span className="text_contact">ayuda@wompi.co</span>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Contact;