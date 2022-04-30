import lightSwitch from './images/lightSwitch.png';
import './App.css';
import { useState } from 'react';

const bgCoverStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'black',
  height: '100vh',
  width: '100vw',
  opacity: '1',
  transition: '2s ease opacity',
  zIndex: '1'
};
function App() {
  const [handleOpacity,setHandleOpacity] = useState(
    {
      opacity: '1'
    });

  const handleLights = ()=>{
    if(handleOpacity.opacity === '1'){
      setHandleOpacity(
        {
          opacity: '0'
        });
      }else{
      setHandleOpacity(
        {
          opacity: '1'
        });
    }
  }
  return (
    <div className="App">
      <img src={lightSwitch} className="lightSwitch" alt="lightSwitch" onClick={handleLights}/>
      <div className="backgroundCover" style={{...bgCoverStyle, ...handleOpacity}}></div>
    </div>
  );
}

export default App;
