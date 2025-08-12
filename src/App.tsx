import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;