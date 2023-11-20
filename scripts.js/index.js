const informacionUsuario = document.getElementById("informacion-usuario")

function mostrarNombreUsuario() {
    const usuarioLogeado = localStorage.getItem("usuarioLogeado")
    if (usuarioLogeado) {
        const p = document.createElement("p")
        const buton = document.createElement("button")
        buton.textContent = "cerrar sesion"
        buton.id = "cerrar-sesion"
        buton.addEventListener("click", () => { 
            informacionUsuario.remove()
            localStorage.removeItem("usuarioLogeado")
        })
        const usuario = JSON.parse(usuarioLogeado)
        p.textContent = `${usuario.nombre} ${usuario.apellido}`
        informacionUsuario.appendChild(p)
        informacionUsuario.appendChild(buton)

    }
}

mostrarNombreUsuario()