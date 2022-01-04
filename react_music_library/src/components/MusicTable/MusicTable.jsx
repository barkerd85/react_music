import React from 'react';
import './MusicTable.css'





                            

const MusicTable = (props) => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Artist</td>
              <td>Album</td>
              <td>Genre</td>
              <td>Release Date</td>
              <td> </td>
            </tr>
          </thead>
          <tbody>
            {props.table.map((e, i) => (
              <tr key={i}>
                <td>{e.title}</td>
                <td>{e.artist}</td>
                <td>{e.album}</td>
                <td>{e.genre}</td>
                <td>{e.release_date}</td>
                <td>
                  <button 
                    onClick={() => {
                      props.deleteRow(e.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
 
export default MusicTable;