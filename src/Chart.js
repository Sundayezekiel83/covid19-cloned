import React, {useState, useEffect} from 'react'
import { fetchDailyData } from './Api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css';



const Chart = ({data, country}) => {
const [dailyData, setDailyData] = useState([])

    useEffect(()=>{
            
        const fetchApi = async () =>{

            const data = await fetchDailyData();

            setDailyData(data)
                                            }

                        fetchApi()
    }, [])

    const LineBar = () =>{
       
       return dailyData.length > 0 ? (
        <Line
        
        data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'infected',
                borderColor: '#3333ff',
                fill: true
            }, {

                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: '#00ff7f',
                fill: true
            }]
        }}
               
        /> ): null
    } 

            const BarChat = () =>{
               return data.confirmed ?(

                <Bar 
                  data={{
                    labels: ['infected', 'Deaths', 'Recovered'],
                    datasets:[{
                          label: 'People',
                          backgroundColor: [ "rgb(0, 0, 255, 0.5)" , 
                          
                          "rgb(255, 0, 0, 0.5)", "rgb(0, 255, 128, 0.5)" ] ,
                          data: [data.confirmed.value, data.deaths.value, data.recovered.value]
                    }]

                  }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `current state in ${country}`}
                }}
                
                
                />


               ) : null;
               
            }
    return (
        <div className={styles.container}>
        {country ? <BarChat />  : <LineBar /> }
        </div>
    )
}

export default Chart
