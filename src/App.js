import React from 'react'
import WeatherAPI from './components/weather/weather';
import QuranAPI from './components/Quran/Quran';
import PhoneAPI from './components/phone/phone';
import './App.scss'
function App() {
  return (
    <div className="App">
      
      <div className='grid-container'>
        <div className='weather'>
          <WeatherAPI/>
        </div>
        <div className='Quran'>
          <QuranAPI/>
        </div>
        <div className='phone'>
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
