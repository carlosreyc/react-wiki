import React, { PropTypes } from 'react';

const ListItem = props => {
    return (
        <div>
            <a href={props.link} className="listItem" target=""><h3>{props.title}</h3></a>
            <p>{props.description}</p>
        </div>
    );
};

ListItem.propTypes = {
    
};

export default ListItem;