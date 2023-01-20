import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-violet-500 text-violet-50 text-center py-10">
      <p>&copy; {new Date().getFullYear()} tech Alpha all rights reserved</p>
    </div>
  );
};

export default Footer;
