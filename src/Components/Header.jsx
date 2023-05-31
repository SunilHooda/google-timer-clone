import React from "react";

const Header = ({ active, setActive }) => {
  return (
    <div className="headerBox">
      <div
        className={active ? "active" : undefined}
        onClick={() => setActive(true)}
      >
        <p>⌛ TIMER</p>
      </div>

      <div
        className={active ? undefined : "active"}
        onClick={() => setActive(false)}
      >
        <p>⏱️ STOPWATCH</p>
      </div>
    </div>
  );
};

export default Header;
