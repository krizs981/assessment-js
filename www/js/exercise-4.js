/**
 * #############################
 * ##  E J E R C I C I O   4  ##
 * #############################
 *
 * Obtener un array con los nombres de todos los municipios de la provincia de Lugo (Galicia)
 * ordenados por orden alfabético inverso (de la Z a la A). Deberás hacer uso de fetch y
 * async / await.
 *
 * Para facilitarte esta tarea dispones de la siguiente API: https://www.el-tiempo.net/api
 *
 * Debes entrar en la web y leer la documentación para encontrar la URL que necesitas. En
 * este caso es bastante simple e intuitivo. ¡A por todas! ;)
 *
 */

'use strict';

const url = 'https://www.el-tiempo.net/api/json/v2/provincias/27/municipios';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((value) => {
    console.log(value);
  });

function fetchData(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

fetchData(url).then((value) => {
  console.log(value);
});

async function getMunicipiosLugo() {
  const url = 'https://www.el-tiempo.net/api/json/v2/provincias/27/municipios';
  const lugoPromise = [];

  for (let i = 1; i < 6; i++) {
    // const persona = await (await fetch(url + i)).json();
    // gente.push(persona);
    lugoPromise.push(fetchData(url + i));
  }
  const municipiosLugo = await Promise.all(lugoPromise);
  console.log(municipiosLugo);
}

getMunicipiosLugo();
