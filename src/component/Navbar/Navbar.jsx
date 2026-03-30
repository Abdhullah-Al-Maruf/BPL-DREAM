import React from 'react';
import Logo from '../../assets/logo.png';
import coins from '../../assets/Currency.png';

const Navbar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a href="/home" className="w-12">
          <img src={Logo} alt="Logo" />
        </a>
      </div>


      {/* RIGHT SIDE (MENU + COIN) */}
      <div className="navbar-end items-center">

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex mr-[60px]">
          <li><a>Home</a></li>
          <li><a href="#Fixture">Fixture</a></li>
          <li><a>Teams</a></li>
          <li><a>Schedule</a></li>
        </ul>

        {/* Coin Section */}
        <div className="flex gap-2 items-center btn">
          <h1 className="font-semibold">{coin} Coin</h1>
          <img src={coins} alt="coin" className="w-6 h-6" />
        </div>

      </div>
       
    </div>
  );
};

export default Navbar;