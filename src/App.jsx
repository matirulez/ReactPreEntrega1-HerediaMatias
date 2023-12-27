/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';
import ItemCount from './componentes/ItemCount/ItemCount';
import Vista from './componentes/Vista/Vista';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>

      <NavBar/>
      <ItemListContainer greeting="Bienvenido a KetoCLub"/>
    </>
  )
}

export default App