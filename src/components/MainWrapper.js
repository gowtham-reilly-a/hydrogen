import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main className="h-screen w-full pt-6 pb-24 overflow-auto p-3 bg-gray-800 relative">
      {children}
    </main>
  );
};

export default MainWrapper;
