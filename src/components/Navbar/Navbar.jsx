import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/WhiteSpace_Logo.png"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar_leftcomponent"]}>
        <img src={logo} alt="Logo"/>
      </div>
      <div className={styles["navbar_rightcomponent"]}>
        <NavLink className={({ isActive }) => (isActive ? styles["active_link"] : styles["normal_link"])} to="/cv">
          <p>CV</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles["active_link"] : styles["normal_link"])} to="/about">
          <p>About</p>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles["active_link"] : styles["normal_link"])} end to="/">
          <p>Work</p>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
