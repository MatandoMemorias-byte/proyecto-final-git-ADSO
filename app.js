function login(usuario, clave) {
  if (usuario === "admin" && clave === "1234") {
    return "Bienvenido al dashboard";
  } else {
    return "Error en las credenciales";
  }
}
