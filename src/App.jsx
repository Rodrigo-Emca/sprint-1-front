// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';


import ContenedorTexto from './components/contenedorTexto/ContenedorTexto';
import ContenedorImagenesMain from './components/ContenedorImagenesMain/ContenedorImagenesMain';

function App() {
  return (
    <div className="App">
      <Hero/>
      <div className="bannerSeparador">
        <div className='contenedorNaranja'>
          <ContenedorImagenesMain></ContenedorImagenesMain>
          <ContenedorTexto></ContenedorTexto>
        </div>

      </div>
      <div className="registerContainer">

      </div>
    </div>
  );
}

export default App;
