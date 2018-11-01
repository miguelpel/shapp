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
            results:this.props.results,
            filters:this.props.filters,
            searchWord:this.props.searchWord,
            addFilter:this.props.addFilter,
            addSearchWord:this.props.handleSearch
        }
    }
 
    render(){
        const headerStyle = {
            width: '80%',
            position: 'fixed',
            top: '0',
            right: '0',
            padding: '5px 0',
            margin: '0',
            backgroundColor: '#ebebeb',
            zIndex: '3'
        }
        return(
            <div style={headerStyle}>
                <SearchField pageName={this.state.pageName}/>
                <FilterLine
                    pageName={this.state.pageName}
                    data={this.state.pageData}
                    addFilter={this.state.addFilter}
                />
                <ResultCount results={this.props.results} tag={this.state.pageName}/>
                <span>add filter</span>
            </div>
        )
    }

}

export default PageHeader;