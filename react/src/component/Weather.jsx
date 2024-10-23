import axios from 'axios'
import React, { useState ,useEffect} from 'react'

const Weather = () => {
   const [weather,setWeather]=useState(null)
   const[city,setCity]=useState('New York')
   
    const getWeather= async ()=>{
        try{
            const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=a2f0e34199194163a9681536242210&q=${city}&aqi=no')
            setWeather(response.data)
            console.log(response.data)
            
          } catch (error) {
            console.error("Error fetching weather data:", error)
          }
    }
  
  
    useEffect(()=>{
      getWeather()
    },[])
    return(
        <div className='weather-main'>
            <h2 className='weather-title'>weather in {weather?.location?.name}</h2>
            <p className='weather-temp'>Temperature: {weather?.current?.temp_c} °C</p>
            <p className='weather-cond'> Condition: {weather?.current?.condition?.text}</p>
            <input type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City" 
            />
            <button onClick={getWeather}>Search</button>
            </div>
    )
}
export default Weather