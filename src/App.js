import './App.css';
import React from 'react';

import { Grid } from '@zendeskgarden/react-grid';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import ZendeskForm from './components/ZendeskForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
      path: "/native",
      element: <ZendeskForm />
  }
]);

function App() {
  return (
    <div className="App" >
      <RouterProvider router={router}>
        <Grid>
          <Home />
        </Grid>
      </RouterProvider>
    </div>
  );
}

export default App;
