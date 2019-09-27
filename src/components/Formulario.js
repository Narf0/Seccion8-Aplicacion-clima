import React, { useState, useEffect } from 'react';

function Formulario({datosConsulta}) {

    // state del componente
    // busqueda = state, guardarBusqueda = this.seSTATE({})
    const [busqueda, setBusqueda] = useState({
        ciudad : '', 
        pais : ''
    })

    const handleChange = e => {
        e.preventDefault();
        //Cambiar el state
      
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })   
    }

    /*useEffect (( ) => {

        console.log(busqueda);
    }, [busqueda]); */

    const consultarClima = e => {
        e.preventDefault();

        // pasar hacia el componente principal la busqueda del usuario
        datosConsulta(busqueda);
    }

    return (
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={(e) => handleChange(e)}
                />
                <label htmlFor="ciudad">Ciudad: </label>

                <div className="input-field col s12">
                    <select onChange={handleChange} name="pais">
                        <option value="">Selecciona un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="ES">España</option>
                    </select>
                </div>

                <div className="input-field col s12">
                    <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />

                </div>
            </div>
        </form>
    )

}

export default Formulario;