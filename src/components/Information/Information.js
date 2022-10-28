import './Information.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Information extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <div className="container_info">
                    <div>
                        <h1>
                            Misión
                        </h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi...
                        </h2>
                    </div>
                    <div>
                        <h1>
                            Visión
                        </h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi...
                        </h2>
                    </div>
                    <div>
                        <h1>
                            Logros
                        </h1>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi...
                        </h2>
                    </div>
                </div>
                <Footer/>
            </div>
            
        );
    }
}
export default Information;