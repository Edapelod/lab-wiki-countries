import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/country-detail"> CountryDetails </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
