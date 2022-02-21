import './App.css';
import List from './components/list/list.component';
import data from './data';
import { useState } from 'react';
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List></List>
        <button onClick={() => console.log('clicked')}> Clear All</button>
      </section>
    </main>
  );
};

export default App;
