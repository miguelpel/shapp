import React, { Component } from 'react';

import * as categories from '../../../../constants/categories';
import FilterField from './Filter';
import { removeDuplicatesAndRank } from './functions';

class FilterLine extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageName: this.props.pageName,
            active: false,
            send: false,
            keys: categories[this.props.pageName],
            category: null,
            title: null,
            value: null,
            options: [],
            addFilter:this.props.addFilter
        }
    }

    recordSelection = (key, value) => {
        console.log("record:")
        console.log(key + " " + value);
        // stock the category and value in the state
        if (key === "title") {
            this.setState({
                title: value
            })
        } else {
            this.setState({
                value: value
            }, this.sendFilter);
            // this.sendFilter is a Callback to setState;
        }
    }

    sendFilter = (filterObj) => {
        //Get the informations category and value,
        // and send them to the pageContainer, to filter the Cards
        this.state.addFilter(filterObj);
        // console.log("send:")
        // console.log({
        //     title: this.state.title,
        //     value: this.state.value
        // });
    }

    fetchOptions = () => {
        // fetch the options from JSON,
        // setState {options}
        // do the function with url and with data
        fetch("https://api.myjson.com/bins/19781g")
        .then(response => response.json())
        .then(data => {
            let options = [];
            data[this.state.pageName].forEach(option => {
                    if (option[this.state.category] instanceof Array) {
                        // option[this.state.category] is an array
                        option[this.state.category].forEach(subOpt => {
                            options.push(subOpt)
                        })
                    } else {
                        options.push(option[this.state.category])
                    }
            });
            options = removeDuplicatesAndRank(options)
            this.setState({
                options: options,
                active: true
            })
            }
        )
        .catch(error => console.log(error.message));
    }

    displayFilters = () => {
        let filters = [];

        this.state.active
        ? filters = [
                <FilterField
                    key="category"
                    title="title"
                    options={this.state.keys}
                    activateFilterLine={this.activateFilter}
                    recordSelection={this.recordSelection}
                />,
                <FilterField
                    key="value"
                    title="value"
                    options={this.state.options}
                    recordSelection={this.recordSelection}
                />
            ]
        : filters = [
                <FilterField
                    key="category"
                    title="title"
                    options={this.state.keys}
                    activateFilterLine={this.activateFilter}
                    recordSelection={this.recordSelection}
                />
            ]

        return filters;
    }

    activateFilter = (category) => {
        this.setState({
            category: category,
            active: false
        })
        this.fetchOptions();
    }

    render(){
        // style to have the filters inline
        const style={
            marginTop: '5px',
            display: 'flex',
            flexDirection: 'row',
            margin: '3px 10px',
        }
        return(
            <div style={style}>
                {/* <FilterField
                    options={this.state.keys}
                    activateFilterLine={this.activateFilter}
                /> */}
                {this.displayFilters()}
            </div>
        )
    }
}

export default FilterLine;
