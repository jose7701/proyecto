const form = document.getElementById("form")
console.log(form)
function guardarInformacion(event) {
    event.preventDefault()
    const formData = new FormData(event.srcElement)
    const nombre = formData.get("nombre")
    const apellido = formData.get("apellido")
    const correo = formData.get("correo")
    const contraseña = formData.get("contraseña")
    const genero = formData.get("genero")

    // guardar en localStorage
    const persona = {
        nombre,
        apellido,
        correo,
        contraseña,
        genero,
    }
    localStorage.setItem(correo, JSON.stringify(persona))
    window.location.href = "./login.html";
}
form.addEventListener("submit", (event) => {
    guardarInformacion(event)
})