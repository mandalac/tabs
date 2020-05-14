import React from "react";

const Tabs = ({ tab, idx, handleClick }) => {
  const style = {
    backgroundColor: "tomato",
    color: "white",
  };
  return (
    <div style={tab.isSelected ? style : null}>
      <h2 onClick={() => handleClick(idx)}>{tab.name}</h2>
    </div>
  );
};
export default Tabs;
