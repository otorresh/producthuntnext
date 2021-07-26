export default function validarCrearProducto(valores) {
  const errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre || valores.nombre.trim() === '') {
    errores.nombre = 'El Nombre es Obligatorio';
  }

  // Validar empresa
  if (!valores.empresa || valores.empresa.trim() === '') {
    errores.empresa = 'El Nombre de la Empresa es Obligatorio';
  }

  // Validar la url
  if (!valores.url || valores.url.trim() === '') {
    errores.url = 'La URL del producto es Obligatoria';
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = 'URL mal formateada o no válida';
  }

  // Validar descripción
  if (!valores.descripcion || valores.descripcion.trim() === '') {
    errores.descripcion = 'Agrega una descripción de tu producto';
  }

  return errores;
}