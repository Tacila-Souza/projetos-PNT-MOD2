import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Carrossel from './Componentes/Carrossel';
import Formulario from './Componentes/Formulario';
import Navbar from './Componentes/Navbar';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route index path='/navbar' element={<navbar/>}/>
    </Routes>
    </BrowserRouter>

    <Navbar />
    <Carrossel />
    <Formulario />
    <Rodape />
    </>
 
  );
}

export default App;
