import React, { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Home } from './components/Home';
import { Overview } from './components/Overview'; // Nueva importación
import { Contact } from './components/Contact'; // Nueva importación
import './App.css';

function App() {
    const [user, setUser] = useState([]);

    return (
        <div className='App'>
            {
                !user.length > 0
                    ? <Formulario setUser={setUser} />
                    : (
                        <>
                            {/* Muestra Home cuando el usuario está autenticado */}
                            <Home user={user} setUser={setUser} />
                            {/* Muestra Overview cuando el usuario está autenticado */}
                            <Overview user={user} setUser={setUser} />
                            {/* Muestra Contact cuando el usuario está autenticado */}
                            <Contact user={user} setUser={setUser} />
                        </>
                    )
            }
        </div>
    );
}

export default App;
