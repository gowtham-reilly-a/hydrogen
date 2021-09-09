import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main className="h-screen w-full pb-40 overflow-auto p-3 bg-gray-800 relative">
      {children}
    </main>
  );
};

export default MainWrapper;
