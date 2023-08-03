import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Body from './components/Body';

import "./style.css"
export default function App(){
    return(
        <div className='container'>
            <Navbar />
            <Main />
            <Body />
        </div>
    )
}
