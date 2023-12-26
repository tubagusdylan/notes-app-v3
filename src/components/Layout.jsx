import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Layout = ({ isLoged }) => {
  return (
    <>
      <Navbar isLoged={isLoged} />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  isLoged: PropTypes.bool.isRequired,
};

export default Layout;
