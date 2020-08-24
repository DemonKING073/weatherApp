import React, { useState } from 'react';
import Nav from './components/nav';
import Homepage from './components/homepage';
import Footer from './components/footer';



function App() {
 const[name,setName]=useState('');

 const getName=(name)=>{
    setName(name);
 }

  return (
    <div className="App">
      <Nav name={getName}/>
    <Homepage country={name}/>
      
      <Footer />
    </div>
  );
}

export default App;
