import React, { Component } from "react";




class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          search: ""
      };
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
    };
  
    handleChange = (event) => {
      this.setState({
        [event.target.className]: event.target.value,
      });
    };
  
    render() {
      return (
        <header >
          <form >
            <input
              onChange={this.handleChange}
              type="search"
              placeholder="Search Music"
              value={this.state.className}
            ></input>
          </form>
        </header>
      );
    }
  }
  
  export default SearchBar;
              
              