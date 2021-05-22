import React, { useState } from 'react';
import JourneyPicker from '../components/JourneyPicker';
import JourneyDetails from '../components/JourneyDetails';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey ? <JourneyDetails journey={journey} /> : null}
    </>
  );
};

export default Home;
