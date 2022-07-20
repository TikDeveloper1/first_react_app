import React, { useEffect, useState } from "react";
import "./Tabs.css";
import tabsData from "../../data/tabs.json";

const Tabs = () => {
  const [activeTabId, setActiveTabId] = useState(1);

  useEffect(() => {
    console.log(activeTabId);
  }, [activeTabId]);

  return (
    <div className="tabs-wrapper">
      <ul>
        {tabsData.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveTabId(item.id)}
            className={activeTabId === item.id ? "active" : undefined}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
