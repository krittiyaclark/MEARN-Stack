import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Backdrop } from "../components/UIElements/Backdrop";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { NavLinks } from "./NavLinks";
import { SideDrawer } from "./SideDrawer";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerIsOpen && (
        <SideDrawer
          show={drawerIsOpen}
          onClick={closeDrawerHandler}
          className="main-navigation__drawer-nav"
        >
          <NavLinks Drawer />
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
