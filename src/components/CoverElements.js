import React from 'react'

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
const h3Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'white',
    fontFamily: 'Dancing Script',
    textAlign: 'center',
    fontSize: '3rem'
}
function CoverElements({opacity, zIndex}) {
    return (
        <div className="backgroundCover" style={{...bgCoverStyle, ...opacity, ...zIndex}}>
            <h3 style={h3Style}>Too much dark? <br/> Turn on the lights with handle.
            </h3>
        </div>
    )
}

export default CoverElements