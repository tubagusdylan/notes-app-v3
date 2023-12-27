import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getAccessToken } from "./utils/network-data";
import { getCurrentTheme } from "./utils/currentTheme";
import { getCurrentLocale } from "./utils/currentLocale";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import AddNotePage from "./pages/AddNotePage";
import DetailNotePage from "./pages/DetailNotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";
import ThemeContext from "./utils/ThemeContext";
import LocaleContext from "./utils/LocaleContext";

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(getCurrentTheme());
  const [locale, setLocale] = useState(getCurrentLocale());

  useEffect(() => {
    if (getAccessToken() !== null) {
      setIsLoged(true);
    }
    setIsLoading(false);
    return () => {
      setIsLoged(false);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  const toggleLocale = () => {
    setLocale((prev) => {
      return prev === "id" ? "en" : "id";
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <Routes>
            <Route path="/" element={<Layout isLoged={isLoged} />}>
              {isLoged ? (
                <>
                  <Route index element={<HomePage />} />
                  <Route path="archives" element={<ArchivePage />} />
                  <Route path="notes/new" element={<AddNotePage />} />
                  <Route path="notes/:id" element={<DetailNotePage />} />
                </>
              ) : (
                <>
                  <Route index element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </>
              )}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
