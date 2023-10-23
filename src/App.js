import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import router from './utils/routers.js';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
