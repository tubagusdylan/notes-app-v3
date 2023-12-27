export const getCurrentLocale = () => {
  if (localStorage.getItem("locale") === null) {
    localStorage.setItem("locale", "id");
  }
  return localStorage.getItem("locale");
};
