import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Header from './components/Header';
import Vocals from './components/Vocals';
import Guitar from './components/Guitar';
import Bass from './components/Bass';
import Drums from './components/Drums';
import Band from './components/Band';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Header />
   <Routes> 
            <Route path='/band' element={ <Band />}/>
            <Route path='/vocals' element={ <Vocals />}/>
            <Route path='/guitar' element={<Guitar />} />
            <Route path='/bass' element={<Bass/>} />
            <Route path='/drums' element={<Drums/>} />
        </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
