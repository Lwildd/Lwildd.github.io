import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Header';
import About from './Sections/About';
import Education from './Sections/Education';
import Publications from './Sections/Publications.js';
import Experience from './Sections/Experience';
import Footer from './Footer.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter basename="">
  
      <CssBaseline />
      <Header />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <About />
        <Publications />
        <Education />
        <Experience />
      <Footer/>
      </Container>

</BrowserRouter>
    </>
  );
}

export default App;