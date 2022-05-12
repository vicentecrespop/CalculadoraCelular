import React from 'react'
import './Button.css'

const Button = props => {
    return <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
            button
            ${props.double ? 'double' : ''}
            ${props.operation ? 'operation' : ''}
            ${props.triple ? 'triple' : ''}
            ${props.equal ? 'equal' : ''}
            `}>
                {props.label}
            </button>
}

export default Button