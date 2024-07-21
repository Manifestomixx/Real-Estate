import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "../style/Navbar.css";
import userImage from "../assets/user.png";
import crown from "../assets/crown.svg";
import AuthDropDown from "../auth/AuthDropDown";

const NavBar = () => {
  const [authShow, setAuthshow] = useState(false);
  const [Profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("clientToken");
  const [isActive, setIsActive] = useState(false);
  
  const navigate = useNavigate();
  const logOut = ()=>{
      localStorage.removeItem("clientToken")
      navigate("/")};

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const closeHamburger = ()=> {
    setIsActive(false);
  };


  const getProfile = async () => {
    if (!token) {
      setError("No token found");
      setLoading(false);
      return;
    }

    try {
      const request = await fetch(`http://localhost:5114/api/v1/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!request.ok) {
        throw new Error("Network response was not ok");
      }

      const response = await request.json();
      setProfile(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    document.title = "Home | Page";
    getProfile();
    const handleScroll = ()=> {
      if (isActive) {
        closeHamburger();
      }
    }
   

    window.addEventListener("scroll", handleScroll);
    
  

    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };

  }, [isActive]);

  return (
    <>
      <main className="container-fluid navSection">
        <section className="container">
          <nav className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center my-4 ms-5 gap-1">
                <div className="logo">BH</div>
              <h1 className="logoName pt-2">BetaHouse</h1>
            </div>

            <div className={`navbar ${isActive ? "active" : ""}`}>
              <ul className={`nav-menu list-unstyled d-flex gap-lg-3 mt-3 ${isActive ? "active" : ""}`}>
                <NavLink
                  to="/Hero"
                  className="text-decoration-none nav-text"
                  activeClassName="nav-text-active" onClick={closeHamburger}
                >
                  <li>Home</li>
                </NavLink>
                <NavLink to="Properties" className="text-decoration-none nav-text" onClick={closeHamburger}>
                  <li>Properties</li>
                </NavLink>
                <NavLink to="About" className="text-decoration-none nav-text" onClick={closeHamburger}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to="Blog" className="text-decoration-none nav-text" onClick={closeHamburger}>
                  <li>Blog</li>
                </NavLink>
                <NavLink to="Contact" className="text-decoration-none nav-text" onClick={closeHamburger}>
                  <li>Contact Us</li>
                </NavLink>
                <p className='my-1 text-black text-center d-lg-none' role="button">Notification</p>
               <p className=' text-black text-center d-lg-none' onClick={logOut} role="button">Log Out</p>
              </ul>
            </div>
            <div className="d-lg-flex gap-3  align-items-center d-none">
              <img src={userImage} alt="User" />
              {loading ? (
                <h5 className="text-white">Loading...</h5>
              ) : error ? (
                <h5 className="text-danger">{error}</h5>
              ) : (
                <h5 className="text-white">{`${Profile?.firstName} ${Profile?.lastName}`|| "Unknown User"}</h5>
              )}
              <div
                className="position-relative d-flex align-items-center"
                role="button"
                onClick={() => (!authShow ? setAuthshow(true) : setAuthshow(false))}
              >
                {!authShow ? (
                  <div className="mb-2">
                    <IoIosArrowUp className="text-white" />
                  </div>
                ) : (
                  <div className="mb-2">
                    <IoIosArrowDown className="text-white" />
                  </div>
                )}
                <div className="position-absolute top-100 end-0">
                  {authShow && <AuthDropDown />}
                </div>
              </div>
            </div>
            <div className="d-flex gap-1 align-items-center d-lg-none box-move">
            <img src={userImage} alt="User" className="profile-img" />
            <h5 className="text-white profile-text">{`${Profile?.firstName} ${Profile?.lastName}`|| "Unknown User"}</h5>
            </div>
            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          </nav>
        </section>
      </main>
      <Outlet />
    </>
  );
};

export default NavBar;
