import React, {useState} from 'react'
import Input from './components/Input';
import Boton from './components/Boton';
import './App.css';


function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form>
        <Input
          nombre={user}
          setNombre={setUser}
          contraseña={password}
          setContraseña={setPassword}
        />
        <Boton
          pass={password}
        />
      </form>
    </div>
  );
}

export default App;
