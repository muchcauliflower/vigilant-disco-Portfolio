import React from "react";
import { useNavigate } from "react-router-dom";
import PopUpNav from "../PopupNav/PopupNav";

const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <header className="topbar">
        <div className="col-sm-9 p-1">
          <h1 className="IndexFont">
            Much<span className="highlight-green">Cauliflower</span>
          </h1>
        </div>
        <h4 className="nav-links">
          <PopUpNav items={items} initialActiveIndex={0} animationTime={600} />
        </h4>
      </header>
    </div>
  );
};

export default TopBar;
