import './App.css';
import React from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {
  ToastProvider,
} from '@zendeskgarden/react-notifications';
import Form from './components/Form';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider zIndex={1}>
        <div className="App" style={{ padding: DEFAULT_THEME.space.md }} >
          <Form />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
