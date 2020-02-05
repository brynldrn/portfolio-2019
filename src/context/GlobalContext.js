import React, { createContext, useState } from "react";

// Global State
const globalState = {
  showMode: "grid"
};

const GlobalContext = createContext(globalState);

function GlobalContextProvider({ children }) {
  const [showMode, setShowMode] = useState(globalState.showMode);

  return (
    <GlobalContext.Provider
      value={{
        showMode: {
          showModeStatus: showMode,
          updateShowMode: setShowMode
        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { globalState, GlobalContext, GlobalContextProvider };
