import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import HolidazeLogo from "../../public/assets/Holidaze.png";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    const user = localStorage.getItem("user");

    if (user) {
      // Hvis brukeren er logget inn, naviger til profil-siden
      navigate("/profile");
    } else {
      // Hvis brukeren ikke er logget inn, naviger til login-siden
      navigate("/login");
    }
  };

  return (
    <>
      <div className="bg-tertiary text-center py-1.5">
        <p className="text-sm">Free cancellations up to 24 hours before arrival</p>
      </div>
      <header className="w-full">
        <nav className="ps-10 py-3">
          <div className="flex justify-between items-center max-w-screen-xl relative">
            <div aria-hidden="true"></div>
            <div className="uppercase font-bold flex items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-tertiary hidden md:flex md:items-center md:space-x-8"
                    : "text-primary hidden md:flex md:items-center md:space-x-8"
                }>
                <FontAwesomeIcon icon={faHouse} className="mt-5" />
              </NavLink>
            </div>
            <div className="uppercase mt-4 flex items-center">
              <NavLink
                to="/venues"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-primary hidden md:flex md:items-center md:space-x-8"
                    : "text-primary hidden md:flex md:items-center md:space-x-8"
                }>
                Venues
              </NavLink>
            </div>
            <div className="uppercase mt-4 flex items-center">
              <Link to="/">
                <img src={HolidazeLogo} alt="Holidaze logo" className="w-[120px]" />
              </Link>
            </div>
            <div className="uppercase mt-4 flex items-center">
              <NavLink
                to="/rentout"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-primary hidden md:flex md:items-center md:space-x-8"
                    : "text-primary hidden md:flex md:items-center md:space-x-8"
                }>
                Rent Out
              </NavLink>
            </div>
            <div className="uppercase font-bold mt-4 flex items-center">
              <button
                onClick={handleProfileClick} // Bruker knapp i stedet for NavLink
                className="text-primary hidden md:flex md:items-center md:space-x-8">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>

            <div className="flex justify-end">
              <button
                className="navbar-toggler focus:outline-none md:hidden mt-2"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation">
                <span className="text-[30px] text-primary pe-3">☰</span>
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden flex-col items-center p-4 ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:flex-row text-secondary mt-44 absolute box-border bg-white w-screen left-0 top-10 z-20`}>
            <button
              className="absolute top-5 right-5 text-[40px] text-primary"
              onClick={closeMenu}
              aria-label="Close menu">
              &times;
            </button>
            <div className="p-4">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "text-primary border-b-2 border-primary" : "text-primary")}>
                <FontAwesomeIcon icon={faHouse} />
              </NavLink>
            </div>
            <NavLink
              to="/venues"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "text-primary uppercase border-b-2 border-primary" : "text-primary uppercase"
              }>
              Venues
            </NavLink>
            <NavLink
              to="/rentout"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "text-primary uppercase border-b-2 border-primary" : "text-primary uppercase"
              }>
              Rent Out
            </NavLink>
            <div>
              <button
                onClick={() => {
                  closeMenu();
                  handleProfileClick();
                }}
                className="text-primary">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="lg:hidden absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm"
              onClick={closeMenu}></div>
          )}
        </nav>
      </header>
    </>
  );
}
