

import React, { PropTypes } from 'react';

const Search = props => {
    return (
            <div>
                <form onSubmit={props.onSubmitSearch}>
                <input type="text" placeholder='Busca lo que quieras'  onChange={props.onChangeTitle} value={props.searchText}/>
                <button className="searchBtn" >
                    Search
                </button>
                </form>

            </div>
    );
};

Search.propTypes = {
    
};

export default Search;



/*import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        state = {
            search: ''
        };
    }
    handleChange(e) {
        
        setState({
            search: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form>
                <input type="text" placeholder='Busca lo que quieras'  onChange={handleChange} value={state.search}/>
                <button className="searchBtn" type="submit">
                    Search
                </button>
                </form>

            </div>
        );
    }
}

export default Search;*/