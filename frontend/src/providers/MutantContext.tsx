import React, { useState } from 'react';

type MutantContextType = {
  isMutant: boolean;
  setIsMutant: (isMutant: boolean) => void;
};

const initialState: MutantContextType = {
  isMutant: false,
  setIsMutant: () => null,
};

// creating a context for the access token so it is available for all components.
const MutantContext = React.createContext<MutantContextType>(initialState);

/**
 * Gives all children to this component access to the access token.
 *
 * @param {React.Component[]} children
 * @returns the context provider.
 */
const MutantContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMutant, setIsMutant] = useState<boolean>(false);

  // The context value that will be supplied to any descendants of this component.
  const context = {
    isMutant,
    setIsMutant,
  };

  // Wraps the given child components in a Provider for the above context.
  return (
    <MutantContext.Provider value={context}>{children}</MutantContext.Provider>
  );
};

export { MutantContext, MutantContextProvider };
