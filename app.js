function login(usuario, clave) {
  if (usuario === "sancocho" && clave === "pantostado") {
    return "Acceso concedido";
  } else {
    return "Acceso denegado";
  }
}
