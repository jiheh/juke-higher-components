'use strict';

import React from 'react';
import { Link } from 'react-router';


const DumbArtists = ({artists, handleChange}) => {
  
  return (
    <div>
      <h3>Artists</h3>

       <form className="form-group" onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="post">Search for an artist.</label>
        <input className="form-control" name="post" type="text" onChange={handleChange} />
      </form>

      <div className="list-group">
        {
          artists.map(artist => (
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
    }

    artistFilter(){
      const originalArray = this.props.artists;
      return originalArray.filter(artist => artist.name.includes(this.state.input));
    }
 
    filteredArry = artistFilter();

    handleChange(evt){
      this.setState({input: evt.target.value});
      // console.log(evt);
      console.log(this.state.input)
    }

    render(){
      return (
        <InnerComponent artists={filteredArry} handleChange={this.handleChange} />
      )
    }
  }
}

export default FormDecorator(DumbArtists)
