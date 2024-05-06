import React from 'react';

export function Overview({ user, setUser }) {
    const handleLogout = () => {
        setUser([]);
    };

    return (
        <div>
            <h1>Overview</h1>
            
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
    );
}
