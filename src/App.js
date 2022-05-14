
import {  Route, Routes  } from 'react-router-dom';

import Torneo from './components/Torneo';
import Tarot from './components/Tarot'

function App() {
  return (
    <Routes>
      <Route path="/torneo" element={<Torneo/>}>
      </Route>
      <Route path="/tarot" element={<Tarot/>}>
      </Route>
      <Route path="*" element={<Tarot/>}>
      </Route>
    </Routes>
  );
}

export default App;
