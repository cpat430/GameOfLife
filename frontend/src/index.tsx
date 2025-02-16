import React from 'react';
import ReactDOM from 'react-dom/client';

import { GridContextProvider } from './providers/GridContext';
import { MutantContextProvider } from './providers/MutantContext';
import { StructureContextProvider } from './providers/StructureContext';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StructureContextProvider>
      <GridContextProvider>
        <MutantContextProvider>
          <App />
        </MutantContextProvider>
      </GridContextProvider>
    </StructureContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
