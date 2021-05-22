import React from 'react';
import './style.css';
import BusStop from '../BusStop';

const JourneyDetails = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((j) => (
          <BusStop
            key={j.name}
            name={j.name}
            station={j.station}
            time={j.time}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyDetails;
