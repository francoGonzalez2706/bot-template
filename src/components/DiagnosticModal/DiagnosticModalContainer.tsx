import { useState } from 'react'
import { DiagnosticModal } from './DiagnosticModal'

export const DiagnosticModalContainer = () => {
  const [showModal, setshowModal] = useState(true)
  return (
    <div>
      {showModal ? <DiagnosticModal setShowModal={setshowModal} /> : <></>}
    </div>
  )
}
