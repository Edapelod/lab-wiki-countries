import { Link } from 'react-router-dom';
import { useState } from 'react';
import Countries from './countries.json';

const CountriesList = () => {
  const [country, setCountry] = useState(Countries);
  return (
    <Link to="/country-detail">
      {' '}
      {country.map((oneCountry) => oneCountry.name.official)}{' '}
    </Link>
  );
};

export default CountriesList;
