
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'styled-components/dist/styled-components.cjs'
import Navbar2 from './components/Navbar2';
import Curso from './components/Curso.js';
import ItemListContainer from './components/ItemListContainer';
import { FaLeaf } from "react-icons/fa";
import ContainerProducts from './components/ContainerProducts';


function App() {
  return (
    <>
    <Navbar2 />
    <div className="App">
      <h1>Bienvenidos a</h1>
      <h2><FaLeaf />VeganShop</h2>
      <hr />
    </div>
    <div>
    <Curso name="Come bien" description="VIVE BIEN"/>
    <ItemListContainer greetings="Podes encontrarnos en Yrigoyen y Alsina" />
    <ContainerProducts />
    </div>
  </>
  );
}

export default App;