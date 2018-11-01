import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

import { apiUrl } from '../../../../constants/categories';
import { removeDuplicatesAndRank } from '../filterselectors/functions';
//const { API_KEY } = process.env

const API_URL = apiUrl;

class Search extends Component {
  constructor(props){
    super(props);

    // the search Results shall then be in the page Container
    this.state = {
      pageName: this.props.pageName,
      query: '',
      resultsIds: [],
      results: []
    }
  }

  getInfo = () => {
    if (this.state.query == '') return;
    console.log("getting infos...");
    axios.get(API_URL)
      .then(({ data }) => {
        let pageData = data[this.state.pageName];
        console.log(pageData);
        let ids = [];

        const searchObj = (obj) => {
          for (let key in obj) {
            if (typeof obj[key] === "string") {
              if (obj[key].toLowerCase() === this.state.query.toLowerCase()) {
                ids.push(obj.id);
              } else if (obj[key].toLowerCase().startsWith(this.state.query.toLowerCase())) {
                this.setState((prevState) => {
                  let results = removeDuplicatesAndRank([...prevState.results, obj[key]])
                  return {
                    results: results
                  }
                })
              }
            } else if (obj[key] !== null && typeof obj[key] === "object") {
              searchObj(obj[key]);
            }
          }
        }
        pageData.forEach(item => {
          searchObj(item);
        })
        console.log(ids);
        this.setState({
          resultIds: ids
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.search.value.length <= 0) {
        this.setState({
          query: '',
          results: [],
          resultIds: []
        })
      }
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  setSearchField = (string) => {
    //this function will serve to set the search field when an option is clicked
    // this.setState({
    //   query: string
    // })
    //this.getInfo()
  }

  render() {
    const style = {
      fontFamily: 'Roboto-Light',
      fontSize: '1em',
      padding: '9px',
      margin: '3px 10px',
      border: '1px solid #CCCCCC',
      borderRadius: '5px',
      width: '80%'
    }

    //we may need to have a function handle the refresh of <Suggestion />
    return (
      <form>
        <input
          style={style}
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} handleClick={this.setSearchField}/>
      </form>
    )
  }
}

export default Search

