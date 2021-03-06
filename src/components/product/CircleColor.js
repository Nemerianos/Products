import React, { Component } from 'react'
import './CircleColor.css'

export default class CircleColor extends Component {
  render() {

      const { 
        priceModifier, 
        setColorPriceModifier, 
        name, 
        setColor, 
        setColorID, 
        colorID, 
        setOptionsColorID, 
        optionColorID 
      } = this.props;

    return (
      <button 
        style={{backgroundColor: name}} 
        className='CircleColor' 
        onClick={()=>
          ((
            setColor(name), 
            setColorID(colorID),
            setOptionsColorID(optionColorID),
            setColorPriceModifier(priceModifier)
          ))
      }/>
    )
  }
}
  