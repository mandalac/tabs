import React, { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const [tabs, setTabs] = useState([
    {
      name: "Tab One",
      IsSelected: true,
      message: "Content for Tab One",
    },
    {
      name: "Tab Two",
      isSelected: false,
      message: "Contend for Tab Two",
    },
    {
      name: "Tab Three",
      isSelected: false,
      message: "Content for Tab Three",
    },
  ]);
  const handleClick = (idx) => {
    tabs.forEach((tab, i) => {
      if (idx !== i) {
        let t = tabs[i];
        t.isSelected = false;
        setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
      } else if (idx === i) {
        let t = tabs[i];
        t.isSelected = true;
        setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
      }
    });
  };

  return (
    <div className="App">
      <div>
        {tabs.map((tab, i) => {
          return <Tabs key={i} tab={tab} handleClick={handleClick} idx={i} />;
        })}
      </div>
      {tabs.map((tab, i) => {
        if (tab.isSelected) {
          return (
            <div className="Content" key={i}>
              <p>{tab.message}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
