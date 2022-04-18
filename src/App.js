import './App.css';
import React, { useState } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import TemplateComponent from './Components/TemplateComponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App" style={{ padding: DEFAULT_THEME.space.md }} >
        <TemplateComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
