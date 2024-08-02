import React from 'react';
import Hello from "./pages/Hello";
import WhoIsGenius from "./components/WhoIsGenius";
import About from "./pages/About";
import InfoSection from "./components/InfoSection";
import Info from "./pages/Info";
import Heading from "./components/Heading";
import Guests from "./pages/Guests";
import Algorithm from "./pages/Algorithm";
import Menu from "./components/Menu";
import Receipt from "./pages/Receipt";

const App = () => {
  return (
      <div>
        <main>
              <Hello/>
              <WhoIsGenius/>
              <About/>
              <InfoSection/>
              <Info/>
              <Heading/>
              <Guests/>
              <Algorithm/>
              <Menu/>
              <Receipt/>
        </main>
      </div>
  );
};

export default App;
