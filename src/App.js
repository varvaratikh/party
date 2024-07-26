import React from 'react';
import Hello from "./pages/Hello";
import WhoIsGenius from "./components/WhoIsGenius";
import About from "./pages/About";
import InfoSection from "./components/InfoSection";
import Info from "./pages/Info";

const App = () => {
  return (
      <div>
        <main>
              <Hello/>
              <WhoIsGenius/>
              <About/>
              <InfoSection/>
              <Info/>
        </main>
      </div>
  );
};

export default App;
