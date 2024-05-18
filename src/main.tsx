import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { App as AntProvider } from 'antd';
import { ThemeProvider } from './theme/ThemeProvider.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
);
