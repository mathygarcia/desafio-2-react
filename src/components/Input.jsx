import React, { useState } from 'react'
import '../css/Input.css';


const Input = ({ nombre, setNombre, contraseña, setContraseña }) => {
    const [error, setError] = useState(false);
    return (
        <>
            <h1>Estados de los componentes y eventos</h1>
            <div className='container-input'>
                <h3>Nombre</h3>
                <input
                    id='nombre-usuario'
                    type="text"
                    value={nombre}
                    placeholder="ingrese un texto"
                    onChange={(e) => {
                        setError(true);
                        setNombre(e.target.value);
                    }}
                ></input>
                {!nombre && error && (
                <p>Bebe ingresar <b>NOMBRE</b> es obligatorio</p>
                )}  
            </div>
            <div className='container-input'>
                <h3>Contraseña</h3>
                <input
                    value={contraseña}
                    type="password"
                    id="contraseña-usuario"
                    placeholder="ingresa tu contraseña"
                    onChange={(e) => setContraseña(e.target.value)}
                ></input>
                {!contraseña && error && (
                <p>Debe ingresar <b>Contraseña</b> es obligatorio</p>
                )}
            </div>
        </>
    )
}
export default Input;