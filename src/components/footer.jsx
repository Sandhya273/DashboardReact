import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 border-top pt-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
        {/* Left: Copyright */}
        <div className="text-muted">
          &copy; 2025@copyrights
        </div>

        {/* Right: Links */}
        <div className="d-flex gap-3 mt-3 mt-md-0">
          <a href="#" className="text-muted text-decoration-none">About</a>
          <a href="#" className="text-muted text-decoration-none">Themes</a>
          <a href="#" className="text-muted text-decoration-none">Blog</a>
          <a href="#" className="text-muted text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
