import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

function App() {

  //Nos ayuda a mirar la información sobre la ubicación actual del navegador
  /*lo que nos interesa ver es la ubicacion a la que nos lleva al darle click en una opcion,
  para eso miramos pathname: La parte de la URL después del nombre de host.*/

  const location = window.location.pathname
  console.log(location)

  const Router = () => {
    if(location === "/"){
      return <Home/>
  }else{
    return <Sobre/>
  }
}

  return (
    <>
      {Router()}
    </>
  );
}

export default App;
