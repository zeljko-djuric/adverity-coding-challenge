import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import _ from 'lodash';
import Papa from 'papaparse';

class Dashboard extends React.Component{

    constructor(args){
        super(args);
        this.state = {
            parsed_data:[],
            clicks: 0,
            impressions: 0,
            suggestions:[]
        }
    }

    componentDidMount(){
        axios.get('http://www.mocky.io/v2/5cd93aeb300000b721c014b0').then(data => {

        //const rowData = data.data.split('\n');
        //console.log(data.data)
        this.setState({
                parsed_data : Papa.parse(data.data,{
                delimiter: ",",
                header: true,
                dynamicTyping: true,
            })
        })

        for(let i in this.state.parsed_data.data){             
            this.setState({
                suggestions:[...this.state.suggestions,
                        {label: this.state.parsed_data.data[i].campaign}]
            })
        }

        for(let i in this.state.parsed_data.data){             
            this.setState({
                suggestions:[...this.state.suggestions,
                        {label: this.state.parsed_data.data[i].channel}]
            })
        }
        })
    }

    updateStatistic = (event) =>{
        // Calculating clicks 
        const click = this.state.parsed_data.data.filter(function (el) {
             if(el.campaign === event.label){
                return el.clicks;
             }
             else if(el.channel === event.label){
                 return el.clicks;
             }
          });

        let clicks_sum = 0;
        for(let i in click){
            clicks_sum = click[i].clicks + clicks_sum;
        }
        this.setState({
            clicks: clicks_sum
        })

        //Calculating impressions
        const impression = this.state.parsed_data.data.filter(function (el) {
            if(el.campaign === event.label){
               return el.impressions;
            }
            else if(el.channel === event.label){
                return el.impressions;
            }
         });

       let impression_sum = 0;
       for(let i in impression){
           impression_sum = click[i].impressions + impression_sum;
       }
       this.setState({
           impressions: impression_sum
       })
    }

    render(){
        return(
            <div className="user-choice">
                <h3>Choose channel or campaign:</h3>
                <Select className="select-field" options={_.uniqWith(this.state.suggestions, _.isEqual)} placeholder="" onChange={this.updateStatistic}/>
                <label>Clicks: </label>
                <span className="clicks">{this.state.clicks}</span>
                <label>Impressions: </label>
                <span className="impressions">{this.state.impressions}</span>
            </div>
        )
    }
}

export default Dashboard;