import React from 'react';

class Statistics extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
                <div>
                    <label>Clicks: </label>
                    <textarea id="story" name="story"
                    rows="1" cols="1"></textarea>
                    <label>Impressions: </label>
                    <textarea id="story" name="story"
                    rows="1" cols="1"></textarea>
                </div>
        )
    }
}

export default Statistics;