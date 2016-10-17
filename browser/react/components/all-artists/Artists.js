'use strict';

import React from 'react';
import { Link } from 'react-router';


const DumbArtists = ({artistFilter, artists, handleChange}) => {
  
  return (
    <div>
      <h3>Artists</h3>

       <form className="form-group" onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="post">Search for an artist.</label>
        <input className="form-control" name="post" type="text" onChange={handleChange} />
      </form>
      
      <div className="list-group">
        {
          artistFilter(artists).map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

function FormDecorator (InnerComponent) {
  return class StatefulForm extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.artistFilter = this.artistFilter.bind(this);
    }

    artistFilter(anArr){
      if(this.state.input !== ''){
        return anArr.filter(artist => artist.name.toUpperCase().includes(this.state.input.toUpperCase()));
      } else {
        return anArr;
      }
    }

    handleChange(evt){
      this.setState({input: evt.target.value});
    }

    render(){
      return (
        <InnerComponent artistFilter={this.artistFilter} artists={this.props.artists} handleChange={this.handleChange} />
      )
    }
  }
}

export default FormDecorator(DumbArtists);
