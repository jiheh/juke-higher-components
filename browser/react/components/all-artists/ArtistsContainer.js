'use strict';

import { connect } from 'react-redux';
import FormDecorator from './Artists';

const mapStateToProps = function (state) {
  return {
    artists: state.artists
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ArtistsContainer = statefulComponentCreator(FormDecorator);
export default ArtistsContainer;
