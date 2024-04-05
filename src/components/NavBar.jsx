import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <motion.nav
      className="nav bg-white text-black"
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween' }}
    >
      <ul className="nav__links">
        <NavLink
          to="/products"
          className="nav__link
          "
        >
          Collection
        </NavLink>
        <NavLink
          to="/products/eyeclothes"
          className="nav__link
          "
        >
          Eyeclothes
        </NavLink>
        <NavLink
          to="/products/sunclothes"
          className="nav__link
          "
        >
          Sunclothes
        </NavLink>

        <NavLink
          to="/about"
          className="nav__link
          "
        >
          About us
        </NavLink>
      </ul>
    </motion.nav>
  );
}

export default NavBar;
