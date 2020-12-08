import React, {useEffect, useState} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from './Api';

const CountryPicker = ({handleCountryChange}) => {


        const [countries, setCountries] = useState([])
        
    useEffect(()=>{

        const fetchApi = async () =>{

            const data = await fetchCountries()
            
            setCountries(data)
            
        }
                fetchApi()
    }, [setCountries])

    const handleChange = (e) =>{

            handleCountryChange(e.target.value)
    }

    return (
        <>
        
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={handleChange}>
                <option value=''>global</option>
                {countries.map((c, i) =>{
                    return <option key={i} value={c.name}>{c.name}</option>
                })}

            </NativeSelect>
                
        </FormControl>

        
        </>
    )
}

export default CountryPicker;
