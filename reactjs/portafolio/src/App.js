import React, { useState } from 'react';
import Layout from './contains/layout'

import '../src/sass/theme.scss'
import '../src/sass/style.scss'

function App() {
  const [theme, setTheme] = useState('light');

  return (
      <div>
        <Layout />
      </div>
  );
}

export default App;


