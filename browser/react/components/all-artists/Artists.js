'use strict';

import React from 'react';
import { Link } from 'react-router';


function ({artists, handleChange}) {

  
  return (
    <div>
      <h3>Artists</h3>

       <form className="form-group">
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

export default function FormDecorator (InnerComponent) {
  return class StatefulForm extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        input = '';
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
      this.setState({input: evt.target.value});
      console.log(evt);
      console.log(this.state.input)
    }

    render(){
      return (
        <InnerComponent artists={this.props.artists} handleChange={this.handleChange} />
      )
    }

}

