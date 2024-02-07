import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from './app/provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './app/provider/ErrorBoundary';
import '@/shared/config/i18/i18';
import './app/styles/index.scss';
import { StoreProvider } from './app/provider/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      {/* <React.StrictMode> */}
        <ThemeProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </ThemeProvider>
      {/* </React.StrictMode> */}
    </ErrorBoundary>
  </BrowserRouter>,
);