function generatePassword(length) {
  const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const minusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '1234568790';
  const especiales = '!"#$%&/()=?¡¿+*[]{}<>^,.;:-_@|¬°';
  const todos = mayusculas + minusculas + numeros + especiales;

  let resultado = '';
  resultado += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  resultado += minusculas[Math.floor(Math.random() * minusculas.length)];
  resultado += numeros[Math.floor(Math.random() * numeros.length)];
  resultado += especiales[Math.floor(Math.random() * especiales.length)];

  for (let i = resultado.length; i < length; i++) {
    resultado += todos[Math.floor(Math.random() * todos.length)];
  }

  resultado = resultado.split("").sort(() => 0.5 - Math.random()).join("");
  return resultado;
}

console.log(generatePassword(12));