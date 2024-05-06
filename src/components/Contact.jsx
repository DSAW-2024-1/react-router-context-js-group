import React from 'react';

export function Contact({ user, setUser }) {
    const handleLogout = () => {
        setUser([]);
    };

    return (
        <div>
            <h1>Contact</h1>
            
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
    );
}
