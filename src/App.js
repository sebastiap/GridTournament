
import {  Route, Routes  } from 'react-router-dom';

import Torneo from './components/pages/Torneo';
import Tarot from './components/pages/Tarot'
import Menu from './components/pages/menu';

function App() {
  return (
    <Routes>
      <Route path="/torneo" element={<Torneo/>}>
      </Route>
      <Route path="/tarot" element={<Tarot/>}>
      </Route>
      <Route path="*" element={<Menu/>}>
      </Route>
    </Routes>
  );
}

export default App;
