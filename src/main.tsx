import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { App as AntProvider } from 'antd';
import { ThemeProvider } from './theme/ThemeProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AntProvider
        notification={{
          stack: {
            threshold: 2,
          },
        }}
      >
        <App />
      </AntProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
