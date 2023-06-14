// Usuarios predefinidos del sitio:
const usuariosRegistrados = [
  {
    nombre: "Máximo Majorel",
    email: "maximomajorel@gastlygames.com",
    password: "1234",
    active: true,
    rol: "USER_ROLE",
  },
  {
    nombre: "María Aylen Serrano",
    email: "aylenserrano@gastlygames.com",
    password: "1234",
    active: true,
    rol: "USER_ROLE",
  },
  {
    nombre: "Matías Leal",
    email: "matiasleal@gastlygames.com",
    password: "1234",
    active: true,
    rol: "USER_ROLE",
  },
  {
    nombre: "Santiago Gonzalez Fernandez",
    email: "santiagogonzalez@gastlygames.com",
    password: "1234",
    active: true,
    rol: "USER_ROLE",
  },
  {
    nombre: "Administrador Gastly Games",
    email: "admin@gastlygames.com",
    password: "admin",
    active: true,
    rol: "ADMIN_ROLE",
  },
];

localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));

const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));

if (!usuariosLocalStorage) {
  localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
}

// Elementos del DOM:
const loginForm = document.getElementById("login-form");

// Evento submit del formulario
loginForm.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const emailInput = evento.target.elements.correo.value;
  const passwordInput = evento.target.elements.contra.value;

  // Verificación de usuarios
  const usuarioEncontrado = usuariosLocalStorage.find((usuario) => {
    if (usuario.email === emailInput) {
      return true;
    }
  });

  // Caso de usuario incorrecto o contraseña incorrecta:
  if (!usuarioEncontrado || usuarioEncontrado.password !== passwordInput) {
    swal({
      title: "Error",
      text: "El usuario o contraseña ingresados son incorrectos",
      icon: "error",
      button: "Intentar de nuevo",
    });
    return;
  }

  // Caso de usuario correcto y contraseña correcta:
  if (usuarioEncontrado && usuarioEncontrado.password === passwordInput) {
    delete usuarioEncontrado.password;
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
    swal({
      title: "Iniciaste sesión",
      text: `Bienvenido ${usuarioEncontrado.nombre}`,
      icon: "success",
      button: "Continuar",
    });

    // Verificar si el usuario tiene rol ADMIN_ROLE
    if (usuarioEncontrado.rol === "ADMIN_ROLE") {
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 1000);
    } else {
      alert("Acceso denegado. No tienes privilegios de administrador.");
    }
  }
});