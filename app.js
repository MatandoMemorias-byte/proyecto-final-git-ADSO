function login(usuario, clave) {
  if (usuario === "admin" && clave === "1234") {
    return "Acceso concedido";
  } else {
    return "Acceso denegado";
  }
}
