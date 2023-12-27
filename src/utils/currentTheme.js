export const getCurrentTheme = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  return localStorage.getItem("theme");
};
