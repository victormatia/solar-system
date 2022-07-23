import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, photo } = this.props;

    return (
      <div data-testid="mission-card" className="mission-card">
        <section className="bunner-card">
          <img src={ photo } alt="apollo" />
          <p data-testid="mission-name" className="mission-name">{ name }</p>
        </section>
        <section className="info-card">
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default MissionCard;
