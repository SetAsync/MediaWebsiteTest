import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Website1 from './pages/Website1';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Website1', element: <Website1 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}