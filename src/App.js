import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Aliados from './components/Aliados';
import Clientes from './components/Clientes';
import Elegir from './components/Elegir';
import Footer from './components/Footer';
import Garantia from './components/Garantia';
import Gif from './components/Gif';
import NavBar from './components/NavBar';
import Orgullosos from './components/Orgullosos';
import Pasos from './components/Pasos';
import Promocion from './components/Promocion';
import Resuelto from './components/Resuelto';

const App = () => {
  return ( 
    <>
      <NavBar/>
      <Aliados/>
      <Pasos/>
      <Promocion/>
      <Gif/>
      <Resuelto/>
      <Clientes/>
      <Elegir/>
      <Garantia/>
      <Orgullosos/>
      <Footer/>
    </>
   );
}
 
export default App;