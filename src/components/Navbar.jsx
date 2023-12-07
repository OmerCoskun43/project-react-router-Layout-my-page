import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="nav_div"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "1.5rem",
        paddingBottom: "1rem",
        paddingRight: "2rem",
        gap: "1rem",
        fontSize: "1.3rem",
        color: "white",
      }}
    >
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
        to="about"
      >
        ABOUT
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
        to="contact"
      >
        CONTACT
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "white",
            textDecoration: "none",
            fontWeight: "bold",
          };
        }}
        to="products"
      >
        PRODUCTS
      </NavLink>
    </div>
  );
};

export default Navbar;
