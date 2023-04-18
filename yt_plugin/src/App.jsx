import { useState } from "react";
import Header from "./Header";
import LeftSideNavBar from "./LeftSideNavBar";
import RightSide from "./RightSide";

const App = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="bg-[#f2f4ff] h-full font-['Outfit']">
      <Header />
      <div className="flex mx-5">
        <div className="w-1/5">
          <LeftSideNavBar setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="w-4/5">
          <RightSide activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default App;
