import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import Countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/country-detail" element={<CountryDetails />} />
      </Routes>
      <CountriesList />
    </div>
  );
}

export default App;
