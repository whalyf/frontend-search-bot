import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState<{email: string, keywords:string}>({
    email: '',
    keywords: 'Palavras chave',
  });

  
  const handleProcess = async () => {
    try {
      // const response = await axios.post('http://localhost:5555/process', {...searchParams, searchId: uuidv4()});
      const response = await axios.post('https://backend-search-bot.vercel.app/api/index/process', {...searchParams, searchId: uuidv4()}, {
        headers: {'Content-Type': 'application/json'}
      });
      if(response.status === 200) {
        toast.success('Obrigado, o diagnóstico será processado e enviado por email')
      }
    } catch (error) {
      console.error('Error at search:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <main>
        <h1>Google Search Digger</h1>

        <div className='keywords-section'>
          <label>Keywords:</label>
          <input
            type="text"
            placeholder='Palavras chave'
            required={true}
            onChange={(e) => setSearchParams({ ...searchParams, keywords: e.target.value })}
          />
        </div>

        <div className='email-section'>
          <label>Email Corporativo:</label>
          <input
            type="email"
            placeholder='Email'
            required={true}
            onChange={(e) => setSearchParams({ ...searchParams, email: e.target.value })}
          />
        </div>
        
        <button onClick={handleProcess}>Descobrir</button>
      </main>
    </>
   
  );
}

export default App
