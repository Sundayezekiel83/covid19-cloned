import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country) =>{

    let changeableUrl = url; 

        if(country){
            changeableUrl = `${url}/countries/${country}`
        }

    try{
            const response = await axios.get(changeableUrl);

            const {data :{confirmed, recovered, deaths, lastUpdate}} = response;

           return {   confirmed, recovered,  deaths,  lastUpdate }
                        
    } catch(error){
                console.log(error);
    }
}

export const fetchDailyData = async () =>{
    try{
        const response = await axios.get(`${url}/daily`)
            const {data} = response
        const modifiedData = data.map((daily)=>({

            confirmed: daily.confirmed.total,
            deaths: daily.deaths.total,
            date: daily.reportDate
        }))

       return modifiedData;


    }catch(error){
        console.log(error)
    }
}

export const fetchCountries = async () =>{
  
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`)
    
        const modifiedData = countries.map((country)=>({
            name: country.name
        }))
            console.log(modifiedData)

        return modifiedData
        

    }catch(error){
        console.log(error)
    }
}