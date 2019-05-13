import React from 'react';


class Tittle extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="tittle-box">
                <h1 className="tittle-box_tittle">Programming Challenge</h1>
                <p className="tittle-box_description">JavaScript: datastructures, typeAhead, groupBy / filter, aggregates</p>
            </div>
        )
    }
} 

export default Tittle;