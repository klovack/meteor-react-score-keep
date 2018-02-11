import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

function App(props) {
  return (
    <div className="wrapper-grid">
      <TitleBar title={props.title} subtitle="Created by Rizki 2018" />
      <PlayerList players={props.players} />
      <AddPlayer />
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
  })).isRequired,
};

App.defaultProps = {
  title: 'Score Keep',
};

export default App;
