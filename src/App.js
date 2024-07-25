import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Pages404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
      {/*Lo que se coloca en BrowserRouter se comparte con las demas rutas*/}
      <Header/>
        <Routes>
          {/*Lo que esta dentro de Routes va a ser dinamico*/}
          {/*Route hace referencia a la ruta*/}
          {/*se agrega path que es el camino, que empieza en la pagina principal "/" */}
          {/*Luego se agrega element que es el elemento que se quiere mostar, en este caso es Home*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          {/*/posts/:id': Especifica que esta ruta coincidirá con cualquier URL que comience con /posts/ seguido de un valor dinámico. El :id es el identificator de cada posts
          element={<Post/>} es elemento que se mostrara cuando se accede a esa ruta */}
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='/categoria/:id/*' element={<Categoria/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
