import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderSubtitle = this.renderSubtitle.bind(this);
  }

  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3 className="title-bar__subtitle">{this.props.subtitle}</h3>;
    }
    return null;
  }

  render() {
    return (
      <div className="title-bar">
        <div className="title-bar__wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TitleBar.defaultProps = {
  subtitle: 'Hello',
};
