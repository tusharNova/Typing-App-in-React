import React from 'react';
import ReactDOM from 'react-dom/client';

import Keylayout from './components/Keylayout';
import Wordlayout from './components/Wordlayout';
import TypingLayout from './components/TypingLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <Wordlayout/> */}
    <TypingLayout/>
    <Keylayout/>  
    </>
  </React.StrictMode>
);
