import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
   
    render(){
        return(
            <div className="header">
                <img className="header_img" src={logo} alt="Logo" height="100em" width="500em"/>
            </div>        
    )
    }
}

export default Header;
