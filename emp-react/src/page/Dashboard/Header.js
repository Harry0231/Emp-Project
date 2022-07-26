import React from "react";

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button className="round-button" onClick={() => setIsAdding(true)}>
          ADD-Data
        </button>
      </div>
    </header>
  );
};

export default Header;
