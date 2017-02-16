import React, { Component, PropTypes } from 'react';
import Search from '../components/Search';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import List from '../components/List'
class SearchContainer extends Component {
    constructor() {
        super()
        this.state = {
            search : ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    
    handleTitleChange(e) {
        
        this.setState({
            search: e.target.value,
            results: []
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let title = this.state.search
        if(!title){
            return
        } 
        this.handleSearch(title)
        this.setState({
            search: ''
        })

    }
    handleSearch(title) {
         superagent.get('https://en.wikipedia.org/w/api.php').query({
            action: 'opensearch',
            search: title,
            limit: 5,
            namespace:0,
            format: 'json'
        }).use(jsonp)
          .end((error,res) => {
              if(error) {
                  console.log(error)
              } else {
                  
                  this.setState({
                      results: res.body
                  })
              }
          })        
    }
    
    render() {
        
        return (
            <div>
                <Search onChangeTitle={this.handleTitleChange}
                        onSubmitSearch={this.handleSubmit}
                        searchText={this.state.search}/>
                {this.state.results === [] ||
                    <List results={this.state.results} />
                }
            </div>
        );
    }
}

SearchContainer.propTypes = {

};

export default SearchContainer;