import React from 'react';
import PropTypes from 'prop-types';

import { Players } from '../api/players';

export default class AddPlayer extends React.Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const playerName = event.target.playerName.value;

    if (playerName) {
      // eslint-disable-next-line
      event.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: this.props.score,
      });
    }
  }

  render() {
    return (
      <div className="section item">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name" autoComplete="off" minLength="3" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  score: PropTypes.number,
};

AddPlayer.defaultProps = {
  score: 0,
};
