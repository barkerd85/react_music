import React, { Component } from 'react';
import axios from 'axios';




class CreateSong extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        artist: "",
        album: "",
        genre: "",
        release_date: "",
      };
    }
  
    async createASong() { 
      try {
        await axios
          .post("http://127.0.0.1:8000/music/", this.state)
          console.log(this.state)
      } catch (ex) {
        
      }
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.createASong();
    };
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
  
    render() {
      return (
        <div>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Title:</label>
            <input type="text"name="title" onChange={this.handleChange} value={this.state.title} />
            <label>Artist:</label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
            <label>Album:</label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
            <label>Genre:</label>
            <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} />
            <label>Release Date:</label>
            <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
            <button type="submit">Create new Song</button>
          </form>
        </div>
      );
    }
  }
  
  export default CreateSong;
              
              
              
              