export const isValidName = (name) => {
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return nameRegex.test(name.trim());
  };
  
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
  