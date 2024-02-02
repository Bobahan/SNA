import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ThemeProvider } from './app/provider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
