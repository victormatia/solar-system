import React from 'react';
import Title from './Title';
import SectionPlanet from './SectionPlanet';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <SectionPlanet />
      </div>
    );
  }
}

export default SolarSystem;
