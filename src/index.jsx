import React from 'react';
import { createRoot } from 'react-dom'; // Change import statement
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot directly

root.render(
  <Auth0Provider
    domain="your auth0 domain id"
    clientId="your autho0 client id"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
