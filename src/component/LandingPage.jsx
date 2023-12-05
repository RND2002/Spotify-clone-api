import React from "react";

import RightSideLanding from "./RightSideLanding";
import RightContent from "./RightContent";
import LeftLandingPage from "./LeftLandingPage";

const LandingPage = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/3 h-screen bg-black">
      <LeftLandingPage/>
      </div>
      <div className="h-screen w-screen bg-gradient-to-tr from-gray-600 via-gray-900 to-black rounded-lg">
        {/* here */}
        <RightSideLanding />
        <RightContent />
      </div>
    </div>
  );
};

export default LandingPage;
