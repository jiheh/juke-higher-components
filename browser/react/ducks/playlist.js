'use strict';

import { convertAlbums } from '../converters';

const ADD_PLAYLIST = 'ADD_PLAYLIST';
const initialPlaylists = [
	{playlist1: [1, 2, 3]},
	{playlist2: [4, 5, 6]}
];

export const createPlaylist = function (playlist) {
  const action = {
    type: ADD_PLAYLIST,
    playlist
  };
  return action;
};

export default function playlistReducer (state = initialPlaylists, action) {
  switch (action.type) {
    case ADD_PLAYLIST: return action.playlist;
    default: return state;
  }
};
