import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [peoples, setPeople] = useState(data);

  return <main>
    <section className='container'>
      <h2>{peoples.length} birthday today</h2>
      {
        peoples.map(people => <List people={people} />)
      }
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>
}

export default App;
