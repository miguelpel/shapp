import React, { Component } from 'react';

// COMPONENTS
// import FilterField from './filterselectors/Filter';
import SearchField from './searchfield/SearchField';
import ResultCount from './ResultCount';
import FilterLine from './filterselectors/FilterLine';

// CSS
import './PageHeader.css';

// the PageHeader needs to be an object component,
// to keep track of the selections.

class PageHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageName:this.props.pageName,
            pageData:this.props.pageData,
            result:this.props.results,
            filters:this.props.filters,
            searchWord:this.props.searchWord,
            addFilter:this.props.addFilter,
            addSearchWord:this.props.handleSearch
        }
    }
 
    render(){
        const headerStyle = {
            padding: '10px'
        }
        return(
            <div style={headerStyle}>
                <SearchField pageName={this.state.pageName}/>
                <FilterLine pageName={this.state.pageName} data={this.state.pageData}/>
                <ResultCount results={this.props.results} tag={this.state.pageName}/>
                <span>add filter</span>
            </div>
        )
    }

}

export default PageHeader;