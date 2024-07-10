import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Route hace referencia a la ruta*/}
          {/*se agrega path que es el camino, que empieza en la pagina principal "/" */}
          {/*Luego se agrega element que es el elemento que se quiere mostar, en este caso es Home*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
