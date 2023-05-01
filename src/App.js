
import { useState, useEffect } from 'react';
import { supabase } from './supabaseclient';
import logo from './logo.svg';
import './App.css';
import { SupabaseClient } from '@supabase/supabase-js';


function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myPrem, setMyPrem] = useState([]);
  
  // This should look familar from Codepen
  async function getPrem() {
    let { data: Prem, error } = await supabase
      .from('Prem')
      .select('*')
    // Update the state
    setMyPrem(Prem);
    console.log(Prem);
  }
  
  useEffect(() => {
    // Execute the function when the component mounts
    getPrem();
  }, []);
  
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      myPrem.map(b => (
        <tr>
          <h1>test</h1>
          <td>{b.Name}</td>
          <td>{b.Mascot}</td>
          <td>{b.Wins}</td>
        </tr>
      ))
    }
    </table>
  )
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