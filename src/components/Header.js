import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <img src={logo} alt="Logo" height="100em" width="500em"/>
            </div>        
    )
    }
}

export default Header;
