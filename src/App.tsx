import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState({
    location: 'YourLocation',
    frequency: 'daily',
    keywords: 'YourKeywords',
  });

  


  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:4000/search', searchParams);
      console.log(response.data);
      alert(response.data.message)
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  

  return (
    <div>
      <h1>Google Search Robot</h1>
      <div>
        <label>Keywords:</label>
        <input
          type="text"
          value={searchParams.keywords}
          onChange={(e) => setSearchParams({ ...searchParams, keywords: e.target.value })}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={searchParams.location}
          onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
        />
      </div>
      <div>
        <label>Frequency:</label>
        <select
          value={searchParams.frequency}
          onChange={(e) => setSearchParams({ ...searchParams, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App
