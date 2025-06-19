import React from "react";

const Header = () => {
  return (
    <div className="w-100">
      <nav className="navbar flex bg-dark text-light w-100">
        <div className="d-flex w-100 align-items-center justify-content-between">

          {/* Left: Sidebar Icon */}
          <div className="d-flex align-items-center">
            <svg
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-text-indent-left"
              viewBox="0 0 16 16"
            >
              <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>

          {/* Right: Search + Buttons */}
          <div className="d-flex align-items-center gap-3">

            {/* Search Bar */}
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ width: "200px" }}
            />

            {/* Profile and Logout Buttons */}
            <button type="button" className="btn btn-light">Profile</button>
            <button type="button" className="btn btn-light">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
