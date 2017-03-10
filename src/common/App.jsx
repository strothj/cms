import React from 'react';

const App = () => (
  <div>
    <span>Hello world</span><br />
    <span>{process.env.BUILD_TARGET}</span>
  </div>
);

export default App;
