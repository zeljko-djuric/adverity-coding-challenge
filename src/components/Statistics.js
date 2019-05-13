import React from 'react';

class Statistics extends React.Component{
   
    render(){
        return(
                <div>
                    <label>Clicks: </label>
                    <textarea className="clicks" name="clicks"
                    rows="1" cols="1" defaultValue="0"></textarea>
                    <label>Impressions: </label>
                    <textarea className="impressions" name="impressions"
                    rows="1" cols="1" defaultValue="0"></textarea>
                </div>
        )
    }
}

export default Statistics;