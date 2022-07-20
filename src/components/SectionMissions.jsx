import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class SectionMissions extends React.Component {
  render() {
    return (
      <section>
        {missions.map((mission, i) => {
          const { name, year, country, destination } = mission;
          return (
            <div key={ i }>
              <MissionCard
                name={ name }
                year={ year }
                contry={ country }
                destination={ destination }
              />
            </div>
          );
        })}
      </section>
    );
  }
}

export default SectionMissions;
