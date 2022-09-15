import './App.css';
import React from 'react';

import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import {
  createBrowserRouter,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Form from './components/Form';
import ZendeskForm from './components/ZendeskForm';

const router = createBrowserRouter([
  {
    path: "/sunshine",
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
