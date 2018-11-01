import React, { Component } from 'react';


import PageHeader from '../page_header/PageHeader';
import PageBody from '../page_body/PageBody';

class PageContainer extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            url: "https://api.myjson.com/bins/19781g",
            pageName: this.props.pageName,
            filters: [],
            searchWord: null,
            results: 0,
            pageBodyDisplay: "cards",
            pageData: [],
            uniqId: ""
        }
        // pageBodyStatus =  "cards", "uniqCard", "form", to allow the different display of the pageBody
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                pageData: data[this.state.pageName],
                results: data[this.state.pageName].length
            }, this.render)
            }
        )
        .catch(error => console.log(error.message));
    }

    changeBodyDisplay = (status) => {
        this.setState({
            pageBodyDisplay: status
        })
    }

    addFilter = (filter) => {
        // the filter is an object containing the category and the option.
        console.log('add filter')
        console.log(filter)
        if (this.state.filters.length <= 0) {
            this.setState({
                filters: [filter]
            })
        } else {
            this.setState(prevstate => ({
                filters: [...prevstate.filters, filter]
            }))
        }
    }

    handleSearch(word){
        this.setState({
            searchWord: word
        })
    }

    render(){
        const pageStyle = {
            position: 'fixed',
            right: '0',
            top: '0',
            backgroundColor: '#ebebeb',
            width: '80%',
            height:'100vh',
            overflow: 'hidden'
        } 
        console.log("page container rendering");
        console.log(this.state.pageData);
            console.log(this.state.results);
        return(
            <div style={pageStyle}>
                <PageHeader
                   pageName={this.state.pageName}
                   pageData={this.state.pageData}
                   results={this.state.results}
                   filters={this.state.filters}
                   searchWord={this.state.searchWord}

                   addFilter={this.addFilter}
                   addSearchWord={this.handleSearch}
                />

                    <PageBody
                        pageName={this.state.pageName}
                        pageData={this.state.pageData}
                        pageBodyDisplay={this.state.pageBodyDisplay}
                        uniqId ={this.state.uniqId}
                    />
            </div>
        )
    }
}

export default PageContainer;