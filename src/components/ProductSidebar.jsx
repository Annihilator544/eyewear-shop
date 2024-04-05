import { NavLink } from 'react-router-dom';

function ProductSidebar() {
  return (
    <nav className="sb-nav">
      <ul className="sb-nav__links">
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products" end className="sb-nav__link">
            All Products
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/eyeclothes" className="sb-nav__link">
            Eyeclothes
          </NavLink>
        </li>
        <li className="sb-nav__link--wrapper">
          <NavLink to="/products/sunclothes" className="sb-nav__link">
            Sunclothes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ProductSidebar;
