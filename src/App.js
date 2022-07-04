import './App.css';
import React from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import Form from '../src/components/Form';

function App() {
  return (
    <ThemeProvider>
      <div className="App" style={{ padding: DEFAULT_THEME.space.md }} >
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
