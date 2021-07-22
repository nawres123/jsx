import React from 'react';
import img1 from './beagleBone.png';
import './App.css';




function App() {
  return (
    <div className='App'>
       <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className='title red'>Nawres</h1>
      
      <img src={img1} alt="img1"/>
      <br></br>
      <div> 
        <img src="./images/raspberry.jpg" alt=""/>
      </div>
       </div>
       <video className='video' style={{width:320,height:240}}controls><source src="myVideo.mp4" type="video/mp4" />
         </video>
    </div>
  );
}

export default App;
