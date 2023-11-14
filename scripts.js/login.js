const form = document.getElementById("form")
const p = document.getElementById("mensaje-error")


function verificarUsuario(event) {
  event.preventDefault()
  const formData = new FormData(event.srcElement)
  const correo = formData.get("correo")
  const contraseña = formData.get("contraseña")

  const usuarioRegistrado = localStorage.getItem(correo)
  const usuario = JSON.parse(usuarioRegistrado)
  if (usuario) {
    console.log(usuario)
    const usuarioValido = contraseña === usuario.contraseña
    if (usuarioValido) {
      localStorage.setItem("usuarioLogeado", usuarioRegistrado)
    } else {
    p.textContent = "El correo o la contraseña son incorrectos"
    }
  } else {
    p.textContent = "El usuario no está registrado"
  }
  redirectTo('./index.html')
}

function redirectTo(path) {
    const a = document.createElement("a")
    a.href = path
    a.click()
  }

form.addEventListener("submit", (event) => {
  verificarUsuario(event)
})