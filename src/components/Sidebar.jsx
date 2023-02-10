import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RockProsUSAlogo from "../assets/download.png";
import "./Sidebar.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <>

      <main>
        <div className={`header ${show ? "space-toggle " : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <i
              className={`fas fa-bars pl-0 ${
                show ? "fa-solid fa-xmark fa-x" : null
              }`}
            ></i>
          </div>
          <p className="text-dark ">
            {" "}
            Signed in as: <NavLink className="text-muted">Sagar</NavLink>
          </p>
        </div>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav overflow-scroll ">
            <div>
              <img
                src={RockProsUSAlogo}
                alt="RockProsUSA logo"
                className="m-3 image"
                style={{ width: show ? "150px" : "0" }}
              />

              <NavLink to="/" className="nav-logo">
                <i className={`fas fa-home-alt nav-logo-icon`}></i>
                <span className="nav-logo-name">Dashboard</span>
              </NavLink>

              <div className="nav-list">
                <NavLink to="/table" className="nav-link active">
                  <i className="fas fa-tachometer-alt nav-link-icon"></i>
                  <span className="nav-link-name">Quotations</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-hotel nav-link-icon"></i>
                  <span className="nav-link-name">Orders</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-image nav-link-icon"></i>
                  <span className="nav-link-name">Dispatch</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Loadout</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Reports</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Comments</span>
                </NavLink>

                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Customers</span>
                </NavLink>
                <NavLink to="/s" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Quarry</span>
                </NavLink>
                {/* <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Employee</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Material</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Quarry</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Employee</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Material</span>
                </NavLink><NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Quarry</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Employee</span>
                </NavLink>
                <NavLink to="/" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Material</span>
                </NavLink> */}
              </div>
            </div>
          </nav>
        </aside>
      </main>
    </>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({children}) => {
// const[isOpen ,setIsOpen] = useState(false);
// const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "100%" : "100px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;
