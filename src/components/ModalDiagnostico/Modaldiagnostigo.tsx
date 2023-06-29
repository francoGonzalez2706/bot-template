import React from 'react'
import "./ModalDiagnostico.css"
interface props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>

}

export const Modaldiagnostigo = ({ setShowModal }: props) => {
  function handleClose() {
    setShowModal(false)
  }

  return (
    <div className="containerModal ">
      <div className="modal">
        <p className='Text-area' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consequatur aliquam fugit enim obcaecati neque, quidem molestiae repellat sint corrupti at odit fugiat ut non? Est soluta facere odit ab aliquid blanditiis itaque laudantium numquam quidem, ratione, assumenda ullam totam cupiditate reprehenderit similique, unde ducimus natus tempora vitae repellendus nam minus! Fuga beatae id rerum natus maiores doloribus accusamus dolorem a aperiam quos minus animi aliquam, hic dolor nemo consequuntur illo architecto, tempore placeat quidem labore alias ipsum pariatur eius. Dolorem, nisi a  </p>
        <button className='CloseModal' onClick={handleClose}></button>
      </div>
    </div>
  )
}
