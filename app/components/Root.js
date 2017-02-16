import React, { Component } from 'react';
import styles from '../styles/Root.css'
import SearchContainer from '../containers/SearchContainer';
import Search from '../components/Search';




class Root extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="container" >
                <h1>Wikipedia Viewer</h1>
                <SearchContainer />
                
            </div>
        );
    }
}

export default Root;