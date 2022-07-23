import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class SectionMissions extends React.Component {
  render() {
    return (
      <section className="section-missions">
        {missions.map((mission, i) => {
          const { name, year, country, destination, photo } = mission;
          return (
            <div key={ i }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                photo={ photo }
              />
            </div>
          );
        })}
      </section>
    );
  }
}

export default SectionMissions;
