export default function validarCrearCuenta(valores) {
  const errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre || valores.nombre.trim() === '') {
    errores.nombre = 'El Nombre es Obligatorio';
  }

  // Validar el email
  if (!valores.email || valores.email.trim() === '') {
    errores.email = 'El Email es Obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = 'Email no válido';
  }

  // Validar el password
  if (!valores.password || valores.password.trim() === '') {
    errores.password = 'El Password es Obligatorio';
  } else if (valores.password.length < 6) {
    errores.password = 'El Password debe ser de al menos 6 caracteres';
  }

  return errores;
}