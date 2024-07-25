import React from 'react';
import Hello from "./pages/Hello";
import WhoIsGenius from "./components/WhoIsGenius";
import About from "./pages/About";

const App = () => {
  return (
      <div>
        <main>
          <Hello/>
          <WhoIsGenius/>
          <About/>
        </main>
      </div>
  );
};

export default App;
