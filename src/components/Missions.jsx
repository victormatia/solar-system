import React from 'react';
import SectionMissions from './SectionMissions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <SectionMissions />
      </div>
    );
  }
}

export default Missions;
