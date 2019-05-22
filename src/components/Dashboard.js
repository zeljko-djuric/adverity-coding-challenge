import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

class Dashboard extends React.Component{

    constructor(args){
        super(args);
        this.state = {
            suggestions:[],
            clicks: 0,
            impressions: 0
        }
    }

    componentWillReceiveProps(props){
        props.dataCSV.data.forEach((element, i) => {
            this.setState((state,props)=>({
                suggestions:[...state.suggestions,
                {label: props.dataCSV.data[i].campaign},
                {label: props.dataCSV.data[i].channel}]
            }));
        });
    }

    calculateClicksAndImpressions = (event) =>{

        // Calculating clicks 
        const click = this.props.dataCSV.data.filter(function (el) {
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
        const impression = this.props.dataCSV.data.filter(function (el) {
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
    console.log("Dashboard redner >>>>>>>")
    console.log(this.props.dataCSV)
        return(
            <div className="user-choice">
                <h3>Choose channel or campaign:</h3>
                <Select className="select-field" options={_.uniqWith(this.state.suggestions, _.isEqual)}
                placeholder="" onChange={this.calculateClicksAndImpressions}/>
                <label>Clicks: </label>
                <span className="clicks">{this.state.clicks}</span>
                <label>Impressions: </label>
                <span className="impressions">{this.state.impressions}</span>
                <h1>{this.state.klikovi}</h1>
                <h1>{this.props.someData}</h1>
            </div>
        )
    }
}

export default Dashboard;