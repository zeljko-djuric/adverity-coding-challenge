import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import _ from 'lodash';
import Papa from 'papaparse';

class UserChoice extends React.Component{

    constructor(args){
        super(args);
        this.state = {
            parsed_data:[],
            click: 0,
            impression: 0,
            suggestion:[]
        }
    }

    updateStatistic = (event) =>{
        // Calculating clicks 
        var click = this.state.parsed_data.data.filter(function (el) {
             if(el.campaign === event.label){
                console.log(el.clicks);
                return el.clicks;
             }
          });

        var clicks_sum = 0;
        for(var i in click){
            clicks_sum = click[i].clicks + clicks_sum;
        }
        console.log(clicks_sum)
        this.setState({
            click: clicks_sum
        })

        //Calculating impressions
        var impression = this.state.parsed_data.data.filter(function (el) {
            if(el.campaign === event.label){
               console.log(el.clicks);
               return el.impressions;
            }
         });

       var impression_sum = 0;
       for(var i in impression){
           impression_sum = click[i].impressions + impression_sum;
       }
       console.log(clicks_sum)
       this.setState({
           impression: impression_sum
       })
    }

    componentDidMount(){
        axios.get('http://www.mocky.io/v2/5cd93aeb300000b721c014b0').then(data => {

        const rowData = data.data.split('\n');
        console.log(data.data)
        this.setState({
                parsed_data : Papa.parse(data.data,{
                delimiter: ",",	// auto-detect
                newline: "",	// auto-detect
                quoteChar: '"',
                escapeChar: '"',
                header: true,
                transformHeader: undefined,
                dynamicTyping: true,
                preview: 0,
                encoding: "",
                worker: false,
                comments: false,
                step: undefined,
                complete: undefined,
                error: undefined,
                download: false,
                downloadRequestHeaders: undefined,
                skipEmptyLines: false,
                chunk: undefined,
                fastMode: undefined,
                beforeFirstChunk: undefined,
                withCredentials: undefined,
                transform: undefined,
                delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
            })
        })

        for(var i in this.state.parsed_data.data){
            this.setState({
                //TODO : label must be created dynamically
                suggestion:[{label: this.state.parsed_data.data[i].campaign}]
            })
        }
        // console.log(this.state.parsed_data.data);
        })
    }
    render(){

        return(
            <div className="user-choice">
                <h3>Choose channel or campaign:</h3>
                <Select className="select-field" options={this.state.suggestion} placeholder="" onChange={this.updateStatistic}/>
                <label>Clicks: </label>
                <span className="clicks">{this.state.click}</span>
                <label>Impressions: </label>
                <span className="impressions">{this.state.impression}</span>
                <h1>{this.state.cat}</h1>
            </div>
        )
    }
}

export default UserChoice;