import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Route as RoutedRoute, NavLink } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails.js';

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: 'Tehran ', country: 'Iran', population: 97080000 },
    { id: 2, name: 'Mashhad', country: 'Iran', population: 3569000 },
    { id: 3, name: 'Shiraz', country: 'Iran', population: 2688000 },
    { id: 4, name: 'Isfahan', country: 'Iran', population: 2578900 },
    { id: 5, name: 'Tabriz', country: 'Iran', population: 1789980 }
  ]);

  const handleAddCity = (newCity) => {
    setCities(prevCities => [...prevCities, newCity]);
  };

  return (
    <Router>
      <header>
        <h1>Cities App</h1>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Cities List</NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">Add City</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <RoutedRoute path="/" element={<CitiesList cities={cities} />} />
        <RoutedRoute path="/add" element={<AddCity onAddCity={handleAddCity} />} />
        <RoutedRoute path="/city/:id" element={<CityDetails cities={cities} />} />
      </Routes>
    </Router>
  );
}

export default App;