import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBriefcase, FaBars } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const { user, signOut } = useAuth();
  const [profileBg, setProfileBg] = useState("#ccc");
  const navigate = useNavigate();

  const username = user?.fullName || user?.email || "User";

  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    setProfileBg(`hsl(${hue}, 70%, 80%)`);
  }, []);

  const handleNavigate = (path) => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) offcanvasInstance.hide();
    navigate(path);
  };

  const handleSignOut = () => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) offcanvasInstance.hide();
    signOut();
  };

  return (
    <>
      <nav className="navbar navbar-primary bg-primary fixed-top p-lg-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link
              className="navbar-brand d-flex align-items-center gap-1 text-white"
              to="/"
            >
              <FaBriefcase size={20} />
              HireFlow
            </Link>

            <ul className="navbar-nav flex-row d-none d-md-flex mb-0">
              <li className="nav-item mx-2">
                <Link to="/home" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/company" className="nav-link text-white">
                  Company
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler d-md-none text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <FaBars size={24} />
          </button>

          <div
            className="d-none d-md-flex align-items-center justify-content-center"
            style={{
              width: 37,
              height: 37,
              borderRadius: "50%",
              backgroundColor: profileBg,
              color: "#333",
              fontWeight: "bold",
              fontSize: "1.2rem",
              userSelect: "none",
              marginRight: "1.5rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
            title={username}
          >
            {username.charAt(0).toUpperCase()}
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end bg-primary text-white"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: 37,
              height: 37,
              borderRadius: "50%",
              backgroundColor: profileBg,
              color: "#333",
              fontWeight: "bold",
              fontSize: "1.2rem",
              userSelect: "none",
            }}
            title={username}
          >
            {username.charAt(0).toUpperCase()}
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <button
                onClick={() => handleNavigate("/home")}
                className="nav-link text-white btn text-start"
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigate("/company")}
                className="nav-link text-white btn text-start"
              >
                Company
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleNavigate("/about")}
                className="nav-link text-white btn text-start"
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={handleSignOut}
                className="btn nav-link text-white text-start"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
