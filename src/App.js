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
  const [handleOpacity,setHandleOpacity] = useState({opacity: '1'});
  const [handleZIndex,setHandleZIndex] = useState({zIndex: '1'});
  const [candlesBlowen,setCandlesBlowen] = useState(false);
  const [candlesBlowenSignal,setCandlesBlowenSignal] = useState(false);

  const handleLights = ()=>{
    if(handleOpacity.opacity === '1'){
      setHandleOpacity({opacity: '0'});
      if(document.getElementById('birthdayHeading') !== null)
      document.getElementById('birthdayHeading').classList.add('wishAppear');
      document.getElementById('balloon1').classList.add('animate1');
      document.getElementById('balloon2').classList.add('animate2');
    }else{
      setHandleOpacity({opacity: '1'});
      setHandleZIndex({zIndex: '1'});
    }
  }
  
  useEffect(()=>{
    setTimeout(() => {
      if(handleOpacity.opacity === '0'){
        setHandleZIndex({zIndex: '-1'});    
        BirthdayAudio.play();
      }
    }, 1000);
  }, [handleOpacity]);
  useEffect(()=>{
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
