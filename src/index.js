import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import minishopStore from './Store/Store'
import App from './App'
import './App.css'

// untuk aplikasi front-end bisa membaca data harus di provider



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={minishopStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

