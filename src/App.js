import logo from './logo.svg';
import './App.css';
import AppCalculator from './AppCalculator'; // Ścieżka do Twojego pliku

import React, { useState } from 'react';
import AppHeader from './AppHeader';

function App() {
  const [fontSize, setFontSize] = useState('medium');
  return (
    <div className={`app-container font-size-${fontSize}`}>
       <AppHeader onFontSizeChange={setFontSize} /> 
      <AppCalculator /> 
     </div>
  );
}

export default App;
