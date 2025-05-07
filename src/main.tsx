import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import './index.css';
import { assertIsNonNullable } from '@powwow-js/core';

const rootElement = document.querySelector('#root');
assertIsNonNullable(rootElement);

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
