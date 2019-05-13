import React from 'react';
import Select from 'react-select';
import axios from 'axios';

class UserChoice extends React.Component{

    constructor(args){
        super(args);
        this.state = {
            channel: [],
            campaign: [],
            clicks: [],
            impressions: []
        }
    }


    componentDidMount(){
        axios.get('http://www.mocky.io/v2/5cd93aeb300000b721c014b0').then(data => {

        // this.setState({info: data.data.split('\n')})
        //console.log('csv lines', data.data.split('\n'))
        // console.log('data:>>>>>>')
        // console.log(data);
        const rowData = data.data.split('\n');

        rowData.map((item) => {
            //console.log(item);
            const result = item.split(',');
            //console.log(result[0]);
            
            // this.setState({campaign: result[0]})
            // this.setState({channel: result[1]})
            // this.setState({clicks: result[2]})
            // this.setState({impressions: result[3]})
        })        
        this.setState({campaign: data.data.match(/[A-Z]{2} ?[|] ?[A-Z]{2} ?[|]? ?[A-Z][a-z]+ ?[|] ?[A-Z][a-z]+/g)})
        this.setState({channel: data.data.match(/Search|Display/g)})
        this.setState({clicks: data.data.match(/\b[0-9]+\b/g)})
        this.setState({impressions: data.data.match(/[0-9]+\n/g)})
        })
    }

    render(){
        var suggestions = [
            {label: "Search"},
            {label: "Display"}
    ]
        this.state.campaign.forEach(function(entry){
            var singleObj = {}
            singleObj['label'] = entry;
            suggestions.push(singleObj);
        });
        return(
            <div>
                <h3>Choose channel or campaign:</h3>
                <Select options={suggestions}/>
                {/* <h1>{this.state.channel[1]}</h1>
                <h1>{this.state.clicks[1]}</h1>
                <h1>{this.state.impressions[1]}</h1> */}
            </div>
        )
    }
}

export default UserChoice;