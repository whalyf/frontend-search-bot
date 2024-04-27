import axios from 'axios';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState({
    location: 'Localização',
    frequency: 'daily',
    email: '',
    keywords: 'Palavras chave',
  });

  


  const handleProcess = async () => {
    console.log(searchParams)
    try {
      const response = await axios.post('http://localhost:8080/process', {...searchParams, searchId: uuidv4()});
      console.log(response);
      // alert(response.data.message)
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  

  return (
    <main>
      <h1>Google Search Digger</h1>

      <div className='keywords-section'>
        <label>Keywords:</label>
        <input
          type="text"
          placeholder='Palavras chave'
          onChange={(e) => setSearchParams({ ...searchParams, keywords: e.target.value })}
        />
      </div>
      
      <div className='location-section'>
        <label>Location:</label>
        <input
          type="text"
          placeholder="Localização"
          onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
        />
      </div>

      {/* <div className='frequency'>
        <label>Frequency:</label>
        <select
          value={searchParams.frequency}
          onChange={(e) => setSearchParams({ ...searchParams, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div> */}

      <div className='email-section'>
        <label>Email Corporativo:</label>
        <input
          type="text"
          placeholder='Email'
          onChange={(e) => setSearchParams({ ...searchParams, email: e.target.value })}
        />
      </div>
      
      <button onClick={handleProcess}>Descobrir</button>
    </main>
  );
}

export default App
