import React, { Component } from 'react';

// COMPONENTS
import FilterField from './filterselectors/Filter';
import SearchField from './searchfield/SearchField';
import ResultCount from './ResultCount';

// CSS
import './PageHeader.css';

// the PageHeader needs to be an object component,
// to keep track of the selections.

class PageHeader extends Component {
    constructor(props){
        super(props);

        // PROPS:
        // page={this.state.page}
        // results={this.state.results}
        // filters={this.state.filters}
        // addFilter={this.addFilter}
        // searchWord={this.searchWord}
        // handleSearch={this.handleSearch}
        this.state = {
            url: this.props.url,
            page: this.props.page.slice(0, -1),
            results: this.props.results,
            filters: this.props.filters,
            addFilter: this.props.addFilter,
            searchWord: this.props.searchWord,
            handleSearch: this.props.handleSearch
        }
    }

    render(){
        const headerStyle = {
            padding: '10px'
        }
        return(
            <div style={headerStyle}>
                <SearchField />

                {/* <FilterField properties={this.state.values}/> */}
                <ResultCount results={this.props.results} tag={this.state.page}/>
                <span>add filter</span>
            </div>
        )
    }

}

export default PageHeader;