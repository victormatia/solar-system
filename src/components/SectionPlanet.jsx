import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SectionPlanet extends React.Component {
  render() {
    return (
      <section className="section-planet">
        {planets.map((planet, i) => {
          const { name, image } = planet;
          return (
            <div key={ i }>
              <PlanetCard planetName={ name } planetImage={ image } />
            </div>
          );
        })}
      </section>
    );
  }
}

export default SectionPlanet;
