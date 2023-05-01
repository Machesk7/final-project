
import React, { useState, useEffect } from 'react';
import {supabase} from './supabaseclient';
import logo from './logo.svg';
import './App.css';
import { SupabaseClient } from '@supabase/supabase-js';

function Library() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('UCL')
        .select('Team, Mascot, Points')
        .order('id', { ascending: true });
      if (error) {
        console.log(error);
      } else {
        setData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Mascot</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.Team}</td>
              <td>{row.Mascot}</td>
              <td>{row.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
       
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          
        </a>
      </header>
    </div>
  );
}

export default App;
