import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import ParticleAnimation from './components/ParticleAnimation';
import CustomCursor from './components/CustomCursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter >
   <ChakraProvider >
   <CustomCursor />
  <App />
  
  </ChakraProvider>
</BrowserRouter>
);

