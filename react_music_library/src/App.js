import React, {Component} from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';
import CreateSong from './components/CreateSong/CreateSong';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    };
  }

  componentDidMount() {
    this.getTable();
  }

  async getTable() {
    try {
      let responseTable = await axios.get("http://127.0.0.1:8000/music/");
      this.setState({
        table: responseTable.data,

      });
      
    } catch (e) {
      
    }
  }

   async deleteRow(PKey) {
    try {
      await axios.delete('http://127.0.0.1:8000/music/' + PKey + "/");
    } catch (e) {
      
    }
  }



  render() {
    return (
      <div>
        <SearchBar />
        <MusicTable table={this.state.table} deleteRow={this.deleteRow} />
        <CreateSong />
      </div>
    );
  }
}

export default App;