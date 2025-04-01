export const encodeBase64 = (obj) => {
    return btoa(JSON.stringify(obj));
  };
  
  export const decodeBase64 = (str) => {
    try {
      return JSON.parse(atob(str));
    } catch (err) {
      return null;
    }
  };
  