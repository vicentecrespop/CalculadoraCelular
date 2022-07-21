import React from "react";
import './Notch.css'

import { FcChargeBattery } from 'react-icons/fc'
import { BsWifi } from 'react-icons/bs'
import { BiVolumeMute } from 'react-icons/bi'

const dataAtual = new Date()
let horas = `${dataAtual.getHours()}`
let minutos = `${dataAtual.getMinutes()}`
minutos = minutos.length === 1 ? `0${minutos}` : minutos
horas = horas.length === 1 ? `0${horas}` : horas

const Notch = props => {
    return (
        <div className="notch">
            <div className="horario">
                <span>{horas}:{minutos}</span>
            </div>
            <div className="dados">
                <BiVolumeMute className="audio"/>
                <BsWifi className="wifi"/>
                <span>100%</span>
                <FcChargeBattery className="bateria"/>
            </div>
        </div>
    )
}

export default Notch
