import React from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 size={32} />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered"
                  />
                </div>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost normal-case text-xl">
            SimRed
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
