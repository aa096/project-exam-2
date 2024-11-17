import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="text-primary pt-20 md:pt-30 bg-[url('/assets/footer.webp')] bg-cover bg-no-repeat bg-[center_5%]">
      <div>
        <div className="flex justify-center items-start gap-8 py-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-[1.5px] border-primary hover:text-white"
                  : "text-primary hover:text-white"
              }>
              Home
            </NavLink>
            <NavLink
              to="/venues"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-[1.5px] border-secondary hover:text-white"
                  : "text-primary hover:text-white"
              }>
              Venues
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-[1.5px] border-secondary hover:text-white"
                  : "text-primary hover:text-white"
              }>
              About
            </NavLink>
          </nav>

          <div className="border-r-[1.5px] border-primary h-28"></div>

          <div className="flex flex-col space-y-2">
            <FontAwesomeIcon icon={faXTwitter} className="text-primary text-3xl hover:text-white" />
            <FontAwesomeIcon icon={faInstagram} className="text-primary text-3xl hover:text-white" />
            <FontAwesomeIcon icon={faFacebook} className="text-primary text-3xl hover:text-white" />
          </div>
        </div>

        <div className="text-center pb-3">
          <p className="text-sm mt-2">© {new Date().getFullYear()} Holidaze</p>
        </div>
      </div>
    </footer>
  );
}
