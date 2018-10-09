import React, { Component } from 'react';
import Select from 'react-select';

//import './filter.css';

// the PageHeader needs to be an object component,
// to keep track of the selections.

// I use the select element from:
// https://github.com/JedWatson/react-select / https://jedwatson.github.io/react-select/
// For an alternaive, see:
// https://www.npmjs.com/package/react-select-element

class FilterField extends Component {
    constructor(props){
        super(props);

        // take the options from the props, and format them, to add them to the state.
        const options = this.props.properties.map((option) => {
            return {value : option, label: option}
        });

        this.state = {
            selectedOption: null,
            options : options
        }

    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    displayOptions = () => {
        let options = this.state.values.map((item, i) => {
            console.log(item);
            return <option key={i} value={item}>{item}</option>
        })
        return options;
    }

    render(){
        const style = {
            width:'300px',
            fontFamily: 'Roboto-Light'
        }
        const { selectedOption } = this.state;
        return(
            <div style={style}>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.options}
                    placeholder="Filter By..."
                    className="filter"
                />
            </div>
        )
    }

}

export default FilterField;