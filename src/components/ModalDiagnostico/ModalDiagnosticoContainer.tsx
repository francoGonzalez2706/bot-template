import React, { useState } from 'react'
import { Modaldiagnostigo } from './Modaldiagnostigo'

export const ModalDiagnosticoContainer = () => {
  const [showModal, setshowModal] = useState(true)
  return (
    <div>
      {showModal ? <Modaldiagnostigo setShowModal={setshowModal} /> : <></>}
    </div>
  )
}
