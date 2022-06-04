import lightSwitch from './images/lightSwitch.png';
import balloons from './images/balloons.png';
import './style/App.css';
import { useEffect, useState } from 'react';
import BirthdayHeading from './components/BirthdayHeading';
import CoverElements from './components/CoverElements';
import CakeCutting from './components/CakeCutting';
import BirthdaySong from './Audio/Happy-Birthday-Song.mp3'


const BirthdayAudio = new Audio(BirthdaySong);
BirthdayAudio.loop = true;

function App() {
  const [handleOpacity,setHandleOpacity] = useState({opacity: '1'}); // to handle opacity of dark screen
  const [handleZIndex,setHandleZIndex] = useState({zIndex: '1'}); // handle z-index of dark screen. if i don't change it then minion will not be clickable
  const [candlesBlowen,setCandlesBlowen] = useState(false); // candles are blown or not. if it is blown then i have to display wish.
  const [candlesBlowenSignal,setCandlesBlowenSignal] = useState(false); // signal to blow candle. when it is true i have to blow the candles.

  const handleLights = ()=>{ // function to turn on and turn off lights.
    if(handleOpacity.opacity === '1'){ // turn on lights
      setHandleOpacity({opacity: '0'});
      if(document.getElementById('birthdayHeading') !== null)
      document.getElementById('birthdayHeading').classList.add('wishAppear');
      document.getElementById('balloon1').classList.add('animate1');
      document.getElementById('balloon2').classList.add('animate2');
    }else{ // turn off lights -> show coverElement and hide main elements
      setHandleOpacity({opacity: '1'});
      setHandleZIndex({zIndex: '1'});
    }
  }
  
  useEffect(()=>{ // run this and re-render app component whenever handleOpacity changes
    setTimeout(() => {
      if(handleOpacity.opacity === '0'){
        setHandleZIndex({zIndex: '-1'});    
        BirthdayAudio.play();
      }
    }, 1000);
  }, [handleOpacity]);
  useEffect(()=>{ // run this and re-render app component whenever candlesBlowenSignal changes
    if(candlesBlowenSignal === true){
      setHandleOpacity({opacity: '1'})
      setHandleZIndex({zIndex: '1'});
    }
  },[candlesBlowenSignal])

  return (
    <div className="App">
      <img src={lightSwitch} className="lightSwitch" alt="lightSwitch" onClick={handleLights}/>
      {!candlesBlowen && <BirthdayHeading/>}
      <CoverElements opacity={handleOpacity} zIndex={handleZIndex}/>
      {!candlesBlowen && <CakeCutting candlesBlowen={candlesBlowen} setCandlesBlowen={setCandlesBlowen} candlesBlowenSignal={candlesBlowenSignal} setCandlesBlowenSignal={setCandlesBlowenSignal}/>}
      {candlesBlowen && <h1 className='birthdayWish'>Hope Your Upcomming Year Goes As Sweet As Your Name.</h1>}
      <img src={balloons} className='balloons' id='balloon1' alt="balloons" />
      <img src={balloons} className='balloons' id='balloon2' alt="balloons" />
    </div>
  );
}

export default App;
