import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

function App(props) {
  return (
    <div className="app">
      <TitleBar />
      <PlayerList players={props.players} />
      <AddPlayer />
    </div>
  );
}

App.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
  })).isRequired,
};

export default App;
