import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const List = props => {
    let list = []
    if(props.results !== undefined) {
            list = props.results[1].map((curr,index)=>{
        return (
            <ListItem key={index} title={props.results[1][index]} description={props.results[2][index] } link={props.results[3][index]}  />
        )
    })
    }
    
    return (
        <div className="list" > {list} </div>
    )
    
    return (
        <div>

        </div>
    );
};

List.propTypes = {
    
};

export default List;