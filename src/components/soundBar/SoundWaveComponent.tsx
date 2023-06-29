import React, { useState } from 'react';
import AudioVisualizer from './soundWave';
import audio from '../../resouses/end_banco_popUp.ogg'
const ComponentWave: React.FC = () => {
  const [touch, settouch] = useState(false)

  const bars = Array.from({ length: 13 }, (_, index) => index + 1);
  const numbers = Array.from({ length: 10 }, (e, index) => e = 0);
  console.log(numbers)
  return (
    <div>
      <button onClick={() => settouch(!touch)} style={{ marginBottom: '.5vh' }}>
        {touch ? 'Pause' : 'Play'}
      </button>
      {
        touch ?
          <AudioVisualizer audioSrc={audio} barCount={16} barColors={['#FF0']} />
          : (
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              {
                bars.map((height, index) => {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '.5vh', margin: '0 .7vw' }}>
                      {numbers.map((e, index) => {
                        if (height / 10 >= e) {
                          return (<img key={index} style={{ width: '1.5vh' }} src='/public/template/px_audio-off.png' />)
                        } else {
                          return (<img key={index} style={{ width: '1.5vh' }} src='/public/template/px_audio-on1.png' />)
                        }
                      })}
                    </div>)
                })
              }
            </div>

          )
      }
    </div>
  );
};

export default ComponentWave;
