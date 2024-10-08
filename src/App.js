
import {  Route, Routes  } from 'react-router-dom';

import Torneo from './components/pages/Torneo';
import Tarot from './components/pages/Tarot'
import Menu from './components/pages/menu';
import CardGen from './components/pages/cardGen/cardGen';
import Varios from './components/pages/Varios';

function App() {
  return (
    <Routes>
      <Route path="/torneo" element={<Torneo/>}>
      </Route>
      <Route path="/tarot" element={<Tarot/>}>
      </Route>
      <Route path="/cardGenerator" element={<CardGen/>}>
      </Route>
      <Route path="/varios" element={<Varios/>}>
      </Route>
      <Route path="*" element={<Menu/>}>
      </Route>
    </Routes>
  );
}

export default App;
