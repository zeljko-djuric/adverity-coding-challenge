import React from 'react';
import Typeahead from 'react-select';
import axios from 'axios';

class UserChoice extends React.Component{

    componentDidMount(){
        axios.get('http://typeaheadaggregates.free.beeceptor.com').then(data => {
        console.log('csv lines', data.data.split('\n'))
        })
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