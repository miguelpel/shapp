import React, { Component } from "react";

import Cards from "./Cards";
import UniqCard from "./UniqCard";
import Form from "./Form";

class PageBody extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.pageData)
    this.state = {
      pageName: this.props.pageName,
      pageData: this.props.pageData,
      pageBodyDisplay: this.props.pageBodyDisplay,
      uniqId: this.props.uniqId
    };
  }

  componentDidUpdate() {
    // console.log("did Update")
    // console.log(this.state.pageData)
    // console.log(this.props.pageData)
    // this.render()
    if (this.state.pageData.length == 0) {
      this.setState({
        pageData: this.props.pageData
      });
    }
  }

  returnContentOfPage = () => {
    // console.log("PageBody returns content")
    // console.log(this.state.pageData)
    switch (this.state.pageBodyDisplay) {
      case "uniqCard":
        //code block
        return <UniqCard id="placeholder" />;

      case "cards":
        //code block
        return (
          <Cards
            pageName={this.state.pageName}
            pageData={this.state.pageData}
          />
        );

      case "form":
        //code block
        return <Form id="placeholder" />;

      default:
        //code block
        return <div>PageBody component Went Wrong</div>;
    }
  };


    render(){
        const pageStyle = {
            position: 'fixed',
            top: '145px',
            right: '0',
            backgroundColor: '#ebebeb',
            width: '80%',
            height:'100vh',
            overflowY: 'scroll'
        }


    // console.log("pageBody renders")
    // console.log(this.state.pageData);
    // console.log(this.state.pageName);

    return <div style={pageStyle}>{this.returnContentOfPage()}</div>;
  }
}

export default PageBody;
