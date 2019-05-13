import React from 'react';
import Typeahead from 'react-select'
class UserChoice extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h3>Choose channel or campaign:</h3>
                <Typeahead/>
            </div>
        )

    }
}

export default UserChoice;