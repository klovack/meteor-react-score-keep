import PropTypes from 'prop-types';
import React from 'react';

import { Players } from '../api/players';

export default class Player extends React.Component {
  constructor(props) {
    super(props);

    // Binding this to all the functions
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete = this.delete.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    Players.update(this.props.player._id, { $inc: { score: 1 } });
  }

  decrement() {
    Players.update(this.props.player._id, { $inc: { score: -1 } });
  }

  delete() {
    Players.remove(this.props.player._id);
  }

  reset() {
    Players.update(this.props.player._id, { $set: { score: 0 } });
  }

  render() {
    return (
      <div className="player-wrapper">
        <h2>
          {this.props.player.name}
        </h2>
        <div className="player__property">
          { this.props.player.position } place - {this.props.player.score} point(s).
          <div>
            <button className="button button-player" onClick={this.decrement}>-1</button>
            <button className="button button-player" onClick={this.increment}>+1</button>
            <button className="button button-player" onClick={this.delete}>Delete</button>
            <button className="button button-player" onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
    rank: PropTypes.number,
    position: PropTypes.string,
  }).isRequired,
};
