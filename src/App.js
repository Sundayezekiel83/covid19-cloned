import React, {useEffect, useState} from 'react'
import './App.css';
import CountryPicker from './CountryPicker'
import Chart from './Chart';
import {fetchData} from './Api';
import Cards from './Cards'
import image from './image.png'
import Headers from './header'
import {Zoom} from 'react-reveal'



function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
            const fetchApi = async () =>{
            const Data = await fetchData ()   
             setData(Data)
             
                }
            fetchApi()
  }, [])

 const handleCountryChange = async (country) =>{
    
    //fetch the data
    const countryData = await fetchData(country)

    setCountry(country)

    setData(countryData)
    //set the state.
  }
          
  return (
    <>
    <div className='headers'>
    <Headers />
    </div>
    <Zoom>
    <div className='container'>
    <img src={image} className='image'/>
   <Cards data={data}/>
   <CountryPicker data = {data} handleCountryChange={handleCountryChange} />
   <Chart data={data} country={country} />
   
      
    </div>
    </Zoom>
    </>
  );
}

export default App;
