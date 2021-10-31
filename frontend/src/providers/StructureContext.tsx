import React, { useState } from "react";

type StructureContextType = {
  structure: string;
  setStructure: (structure: string) => void;
};

const initialState: StructureContextType = {
  structure: "",
  setStructure: () => null,
};

// creating a context for the access token so it is available for all components.
const StructureContext =
  React.createContext<StructureContextType>(initialState);

/**
 * Gives all children to this component access to the access token.
 *
 * @param {React.Component[]} children
 * @returns the context provider.
 */
const StructureContextProvider: React.FC = ({ children }) => {
  const [structure, setStructure] = useState<string>("none");

  // The context value that will be supplied to any descendants of this component.
  const context = {
    structure,
    setStructure,
  };

  // Wraps the given child components in a Provider for the above context.
  return (
    <StructureContext.Provider value={context}>
      {children}
    </StructureContext.Provider>
  );
};

export { StructureContext, StructureContextProvider };
