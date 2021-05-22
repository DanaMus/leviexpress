import React, { useState, useEffect } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  console.log(cities);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
  };

  const handleFromCity = (e) => {
    setFromCity(e.target.value);
  };

  const handleToCity = (e) => {
    setToCity(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  console.log(fromCity, toCity, date);

  const CityOptions = ({ cities }) => {
    return (
      <>
        <option value="">Vyberte</option>
        {cities.map((city) => {
          return (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          );
        })}
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={handleFromCity} value={fromCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={handleToCity} value={toCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={handleDate} value={date}>
              <option value="">Vyberte</option>
              <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};

export default JourneyPicker;
