import React, { Component } from "react";
import './Phone.css'

import Calculator from "./Calculator";
import Notch from '../components/Notch'


export default props => {
    return (
        <div className="celular">            
            <Notch />
            <Calculator />
        </div>
    )
}