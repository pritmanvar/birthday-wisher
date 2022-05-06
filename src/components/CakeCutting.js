import React from 'react'
import CakeImg from '../images/cakeWithoutLight.png'
import CandleLight from '../images/candleLightCropedFinal.gif'
import Minion from './Minion'
import '../style/CakeCutting.css'

function CakeCutting(props) {
  return (
    <div className="birthdayElementContainer">
      <div className='cakeContainer'>
        <img className='cake' src={CakeImg} alt="Cake" />
        {!props.candlesBlowenSignal && <img className='candleLight' src={CandleLight} alt="Candle Light" />}
      </div>
      <Minion candlesBlowen={props.candlesBlowen} setCandlesBlowen={props.setCandlesBlowen} candlesBlowenSignal={props.candlesBlowenSignal} setCandlesBlowenSignal={props.setCandlesBlowenSignal}/>
    </div>
  )
}

export default CakeCutting
