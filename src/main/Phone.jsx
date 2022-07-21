import React from "react";
import './Phone.css'

import Calculator from "./Calculator";
import Notch from '../components/Notch'


const Phone = props => {
    return (
        <div className="celular">            
            <Notch />
            <Calculator />
        </div>
    )
}

export default Phone