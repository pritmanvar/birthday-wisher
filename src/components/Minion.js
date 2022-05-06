import React from 'react'
import minionImg from '../images/minion.png'
import windImg from '../images/wind.png'
import '../style/Minion.css'

const blowCandles = ()=>{
  document.getElementsByClassName('wind')[0].classList.add('animateWind');
}
function Minion(props) {
  return (
    <>
      <div className='minionThought'>
        <img className='minion' src={minionImg} alt="minion" onClick={()=>{
          blowCandles();
          setTimeout(() => {
            props.setCandlesBlowenSignal(true);
            setTimeout(() => {
              props.setCandlesBlowen(true);
            }, 2000);
          }, 1000);
        }} />
      </div>
      <img className='wind' src={windImg} alt="minion" />
    </>
  )
}

export default Minion