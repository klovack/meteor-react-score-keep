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
    const itemClassName = `item--position-${this.props.player.rank}`;

    return (
      <div className={`${itemClassName} item player`}>
        <div>
          <div className="player__name">
            {this.props.player.name}
          </div>
          <div className="player__stats">
            { this.props.player.position } place - {this.props.player.score} point(s).
          </div>
        </div>
        <div className="player__actions">
          <button className="button round" onClick={this.decrement}>-1</button>
          <button className="button round" onClick={this.increment}>+1</button>
          <button className="button round" onClick={this.delete}>X</button>
          <button className="button" onClick={this.reset}>Reset</button>
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
