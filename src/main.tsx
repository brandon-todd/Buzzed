import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import { Route, Routes } from 'react-router-dom';
import { AddIngredient } from './view/DrinkCreation/AddIngredient';
import { RandomDrink } from './view/RandomDrink/RandomDrink';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes>
      <Route path="/AddIngredient" element={<AddIngredient />} />
      <Route path="/RandomDrink" element={<RandomDrink />} />
      <App />
    </Routes>
  </React.StrictMode>
)