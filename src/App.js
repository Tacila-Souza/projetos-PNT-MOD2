import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Carrossel from './Componentes/Carrossel';
import Formulario from './Componentes/Formulario';
import Navbar from './Componentes/Navbar';
import Rodape from './Componentes/Rodape';
import Sobre from './Componentes/Sobre';

function App() {
  return (
    <>
< BrowserRouter>
< Navbar/>
< Routes >
  <Route path='Sobre' element={<Sobre />}/>
</Routes>
</BrowserRouter >

<Carrossel/>
<Formulario/>
<Rodape/>

    </>
 
  );
}

export default App;
