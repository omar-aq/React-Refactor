import React from "react";
// import dataImage from "../img/simple-house-01.jpg";
import logo from "../img/simple-house-logo.png";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { authActions } from "../store";

function Header() {
  // const success = useSelector((state) => state.success);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("success");
    localStorage.removeItem("user");
    // window.location.reload();
    // navigate("/login");

    dispatch(authActions.logout());
  };
  return (
    <div className="placeholder">
      <div
        className="parallax-window"
        // dataParallax="scroll"
        // dataImageSrc={dataImage}
      >
        <div className="tm-header">
          <div className="row tm-header-inner">
            <div className="col-md-6 col-12">
              <img src={logo} alt="Logo" className="tm-site-logo" />
              <div className="tm-site-text-box">
                <h1 className="tm-site-title">Simple House</h1>
                <h6 className="tm-site-description">new restaurant template</h6>
              </div>
            </div>
            <nav className="col-md-6 col-12 tm-nav">
              <ul className="tm-nav-ul">
                <li className="tm-nav-li">
                  <Link className="tm-nav-link">
                    Hello, {localStorage.getItem("user")}
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link className="tm-nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link className="tm-nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link className="tm-nav-link" to="/contact">
                    contact
                  </Link>
                </li>
                <li className="tm-nav-li">
                  <Link
                    data-testid="logout"
                    style={{ cursor: "pointer" }}
                    onClick={logoutHandler}
                    className="tm-nav-link"
                    to={"/login"}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
