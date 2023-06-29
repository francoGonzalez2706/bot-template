import React from 'react'
import "./FooterLeft.css";

interface props {
  ProgresBar: number
}

export const FooterLeft = ({ ProgresBar }: props) => {
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className='content-footer' >
      <div>
        <button className='btn-Bateria' />
        <button className='btn-volver' />
        <button className='btn-Avanzar' />
      </div>
      <div className='ProgressBar'>
        {
          numbers.map((e, index) => {
            if (ProgresBar / 10 * 2 <= index) {
              return (<img className='avance' src='/public/template/avance_off.png' />)
            } else {
              return (<img className='avance' src='/public/template/avance_on.png' />)
            }

          })
        }
      </div>
    </div>
  )
}
