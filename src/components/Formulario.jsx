import "./Formulario.css"
import { useState } from "react"

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const usuarioValido = "admin@admin.com"; // Usuario válido
    const contraseñaValida = "admin"; // Contraseña válida

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre !== usuarioValido || contraseña !== contraseñaValida) {
            setError(true)
            return
        }

        setError(false)
        setUser([nombre])
    }

    return (
        <section>
            <h1>Login</h1>
            <form
                className="formulario"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input
                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <button>Iniciar sesión</button>
            </form>
            {error && <p>Usuario o contraseña incorrectos</p>}
        </section>
    )
}
