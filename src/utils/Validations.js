//Valida que sea un nombre solo como cadena de letras y no de numeros ni caracteres especiales
export const isValidName = (name) => {
  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  return nameRegex.test(name.trim());
};
//Valida que solo sea en formato email el correo que se ingresa
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const getNameError = (value) => {
  if (!isValidName(value)) return "El nombre debe tener solo letras";
  return "";
};

export const getEmailError = (value) => {
  if (!isValidEmail(value)) return "Ingresa un correo valido";
  return "";
};
