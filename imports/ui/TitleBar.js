import React from 'react';

export default class TitleBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onGameNameInput = this.onGameNameInput.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.gameName.disabled = true;

    setTimeout(() => {
      this.gameName.disabled = false;
    }, 800);
  }

  onGameNameInput(e) {
    this.setState({
      gameName: e.target.value,
    });
  }

  render() {
    return (
      <div className="title-bar">
        <form className="title-bar__form" onSubmit={this.onSubmit}>
          <input
            className="title-bar__game-name"
            type="text"
            name="game-name"
            placeholder="Game name"
            value={this.state.gameName}
            onChange={this.onGameNameInput}
            onSubmit={this.onSubmit}
            ref={(gameName) => { (this.gameName = gameName); }}
          />
        </form>
      </div>
    );
  }
}

