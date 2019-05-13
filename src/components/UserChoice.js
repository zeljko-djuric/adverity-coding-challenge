import React from 'react';
import Typeahead from 'react-select';
import axios from 'axios';

class UserChoice extends React.Component{

    constructor(){
        super();
        this.state = {
            channel: [],
            campaign: [],
            clicks: [],
            impressions: [],
        }
    }

    componentDidMount(){
        axios.get('http://www.mocky.io/v2/5cd93aeb300000b721c014b0').then(data => {
        // this.setState({info: data.data.split('\n')})
        //console.log('csv lines', data.data.split('\n'))
        console.log(data.data.split('\n'))
        this.setState({campaign: data.data.match(/[A-Z]{2} ?[|] ?[A-Z]{2} ?[|]? ?[A-Z][a-z]+ ?[|] ?[A-Z][a-z]+/g)})
        this.setState({channel: data.data.match(/Search|Display/g)})
        this.setState({clicks: data.data.match(/\b[0-9]+\b/g)})
        this.setState({impressions: data.data.match(/[0-9]+\n/g)})
        })
    }

    render(){
        return(
            <div>
                <h3>Choose channel or campaign:</h3>
                <Typeahead/>
                <h1>{this.state.campaign[0]}</h1>
                <h1>{this.state.channel[0]}</h1>
                <h1>{this.state.clicks[0]}</h1>
                <h1>{this.state.impressions[0]}</h1>
            </div>
        )
    }
}

export default UserChoice;