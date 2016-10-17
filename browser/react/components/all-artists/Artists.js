'use strict';

import React from 'react';
import { Link } from 'react-router';

function (props) {
  const artists = props.artists;
  
  return (
    <div>
      <h3>Artists</h3>

       <form className="form-group" onSubmit={this.props.handleSubmit}>
        <label htmlFor="post">Say something great:</label>
        <input className="form-control" name="post" type="text" onChange={this.props.handleChange} />
        <button type="submit" className="btn btn-default">Post</button>
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

  constructor (props) {
    super(props);
    this.state = {
      input = '';
    }
  }
}