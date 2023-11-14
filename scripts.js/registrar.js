const form = document.getElementById("form-register")
console.log(form)
function guardarInformacion(event) {
    event.preventDefault()
    const formData = new FormData(event.srcElement)
    const nombre = formData.get("nombre")
    const apellido = formData.get("apellido")
    const correo = formData.get("correo")
    const contraseña = formData.get("contraseña")

    // guardar en localStorage
    const persona = {
        nombre,
        apellido,
        correo,
        contraseña
    }
    localStorage.setItem(correo, JSON.stringify(persona))
    redirectTo("./login.html")
}

function redirectTo(path) {
    const a = document.createElement("a")
    a.href = path
    a.click()
  }

form.addEventListener("submit", (event) => {
    guardarInformacion(event)
})