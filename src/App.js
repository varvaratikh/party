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
import Comments from "./pages/Comments";
import Form from "./pages/Form";
import Footer from "./components/Footer";
import {ThemeProvider} from "./context/ThemeContext";

const App = () => {
  return (
      <ThemeProvider>
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
            <Comments/>
            <Form/>
            <Footer/>
      </ThemeProvider>
  );
};

export default App;
