import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [palabraVisible, setpalabraVisible] = useState(false);

  useEffect(() => {
    console.log('El estado de palabraVisible ha cambiado');
  }, [palabraVisible]);

  return (
    <div className="App">
     <button onClick={() => setpalabraVisible(!palabraVisible)}>Mostrar/Ocultar</button>
     {palabraVisible && <p>Aparezco!</p>}
    </div>
  );
}

export default App;
