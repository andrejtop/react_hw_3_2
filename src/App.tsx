import React from 'react';
import Listing from './components/Listing';
import etsy from './data/etsy.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <Listing items={etsy} />
    </div>
  );
};

export default App;
