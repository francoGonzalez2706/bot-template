import { useState } from 'react'
import "./Template.css";
import ComponentWave from '../SoundBar/SoundWaveComponent';
import { Chat } from '../Chat/Chat';
import { FooterLeft } from '../FooterLeft/FooterLeft';
import { DiagnosticModalContainer } from '../DiagnosticModal/DiagnosticModalContainer';

export const Template = () => {
  const [state, setstate] = useState('LOREM IPSUM DOLOR SIT AMET CONSECTETUR, ADIPISICING ELIT. CUPIDITATE TEMPORE APERIAM VOLUPTATES VITAE DOLORUM ELIGENDI. CONSEQUUNTUR QUOD EA VEL ASPERNATUR PORRO MODI AT EXPEDITA HARUM DESERUNT NISI, IMPEDIT, ALIQUID CUMQUE?')

  const [ProgresBar, setProgresBar] = useState(50)

  return (
    <div className='ContainerRobot'>
      <Chat text={state} />
      <Chat text={state} isUser={true} />
      <div className='separador' />
      <FooterLeft ProgresBar={ProgresBar} />
      <div className='Btn_mic_off' />
      <div className='content-footer-Audio' >
        <ComponentWave />
      </div>
      <div className='bootom-fade' />
      <DiagnosticModalContainer />
    </div>
  )
}
