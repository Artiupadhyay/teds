import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';

function App() {
  return (<div>
     <Navbar name="Arti"/>
     <Card />
     <Footer/>
    
    
    </div>
    
    

    );
}

export default App;
