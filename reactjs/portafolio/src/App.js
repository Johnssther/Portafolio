import React, { useState } from 'react';
import Layout from './contains/layout'

import '../src/sass/theme.css'
import '../src/sass/style.css'

function App() {
  const [theme, setTheme] = useState('light');

  return (
      <div>
        <Layout />
      </div>
  );
}

export default App;
