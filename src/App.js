import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Suggestion from './components/Suggestion';

function App() {

  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="app">
      <Weather query={query} setQuery={setQuery} data={data} setData={setData} selectedPlace={selectedPlace} setSelectedplace={setSelectedPlace}/>
      <Suggestion query={query} data={data} setData={setData} selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
    </div>
  )

}

export default App;