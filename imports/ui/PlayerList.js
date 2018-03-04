import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.renderPlayers = this.renderPlayers.bind(this);
  }

  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="player-wrapper no-player">
          <p>Please add a player to get started!</p>
        </div>
      );
    }
    return this.props.players.map(player => (
      <Player key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <div className="wrapper">
        <FlipMove duration={300} easing="ease-out" maintainContainerHeight="true" >
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
  })).isRequired,
};
