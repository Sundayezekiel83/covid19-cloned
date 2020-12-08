import React from 'react'
import './header.css'
import 'react-typewriting-effect/dist/index.css'
import {Typewriter} from 'react-typewriting-effect';

const header = () => {
    return (
        <div className="header">
            <div className='header_item'> <h4> Covid 19 update</h4></div>
            
            <div className="header_item"> 
            
            
            <Typewriter string="Wash your hand regularly with Soap and water" cursor="_" delay={80} />
            
                       
             </div>
            <div className='header_item'> Covid is Real Stay Safe</div>
        </div>
    )
}

export default header
