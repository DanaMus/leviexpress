import React, { useState } from 'react';
import JourneyPicker from '../components/JourneyPicker';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey ? <p>Nalezeno spojení s id {journey.journeyId}.</p> : null}
    </>
  );
};

export default Home;
