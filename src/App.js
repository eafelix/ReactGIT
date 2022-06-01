
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.css'
import Curso from './Curso.js'
import Ciudad from './Ciudad.js'
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/Cartwidget';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <CartWidget></CartWidget>
    <div className="App">
      <h1>Bienvenidos a nuestra</h1>
    </div>
      {/*<h4>{Curso("Tienda Verde", "todo lo orgánico en un solo lugar")}</h4>*/}
      <Curso name="Tienda Verde" description="todo lo orgánico en un solo lugar"/>
      {/*<p>{Curso("Come bien", "VIVE BIEN")}</p>*/}
      <Curso name="Come bien" description="VIVE BIEN"/>
    <hr/>
    <Ciudad ubicacion="Quilmes" provincia="Buenos Aires"></Ciudad>
    <div className='SaludoItem'>
        <ItemListContainer greeting="Podes encontrarnos en Yrigoyen y Alsina" />
    </div>
    </>
  );
}

export default App;