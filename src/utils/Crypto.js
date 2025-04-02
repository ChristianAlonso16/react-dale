//Convierte el objeto el usuario a base 64 para guardarlo de tal manera en localstorage
export const encodeBase64 = (obj) => {
  return btoa(JSON.stringify(obj));
};
//decodifica el objeto del usuario en base 64 para retornar sus propiedades como objeto
export const decodeBase64 = (str) => {
  try {
    return JSON.parse(atob(str));
  } catch (err) {
    return null;
  }
};
