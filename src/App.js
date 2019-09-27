import React from 'react';
import Header from './components/header';
import Formulario from './components/Formulario';

  

function App() {

  // State principal
  // ciudad = state, guardarCiudad = this.setState()
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');


  const datosConsulta = datos => {
    console.log(datos);

    if (datos.ciudad === '' || datos.pais === ''){
      //un error
      return;
    }

    //Ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
  }

  return (
   <div className="App">
      <Header
        titulo = 'Clima React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default App;
