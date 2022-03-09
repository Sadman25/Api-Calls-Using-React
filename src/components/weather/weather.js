import React, { useState } from 'react'
import axios from 'axios'

export default function WeatherAPI() {

    const [data,setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=55bffc22bf431b5a5ebf2b838341a5ea`

    const search = (e)=> {
        if (e.key ==='Enter'){
            axios.get(url)
            .then((response)=>{
                setData(response.data)
                console.log(response.data)
                setLocation('')
            })
        }
    }
    

  return (
    <div className='weather'>
        <h2>Weather Information</h2>        
            <div className='container'>
                <div className="search">
                <input
                placeholder='Enter a City'
                value={location}
                type="text"
                onChange={(e)=> setLocation(e.target.value)}
                onKeyPress={search} />
            </div>
            <div className="location">
                <p>{data.name}</p>
            </div>            
            <div className='temp'>
                {data.main ? <h1>Temp: {data.main.temp} C</h1> : null}
            </div>
            <div className='description'>
                {data.main ? <p>{data.main.description}</p> : null}
            </div>
            <div className='bottom'>
                <div className='feels'>                
                    {data.main ? <p>Feels Like: {data.main.feels_like} C</p> : null}
                </div>
                <div className='humidity'>
                    {data.main ? <p>Humidity: {data.main.humidity}</p> : null}
                </div>
                <div className='wind'>
                    {data.wind ? <p>Wind Speed: {data.wind.speed} MPH</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}
