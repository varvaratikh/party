import React from 'react';
import Hello from "./pages/Hello";
import WhoIsGenius from "./components/WhoIsGenius";

const App = () => {
  return (
      <div>
        <main>
          <Hello/>
          <WhoIsGenius/>
        </main>
      </div>
  );
};

export default App;
