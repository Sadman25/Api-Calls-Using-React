import React from 'react'
import WeatherAPI from './components/weather/weather';
import QuranAPI from './components/Quran/Quran';
import PhoneAPI from './components/phone/phone';
import './App.css'
function App() {
  return (
    <div className="App">
      
      <div class="grid-container">
        <div className='weather'>
          <WeatherAPI/>
        </div>
        <div className='Quran'>
          <QuranAPI/>
        </div>
        <div>
        <PhoneAPI/>
        </div>  
        
      </div>


      

      <div className='New'>
        <div className='container'>
          
        </div>        
      </div>
      
    </div>
  );
}

export default App;
