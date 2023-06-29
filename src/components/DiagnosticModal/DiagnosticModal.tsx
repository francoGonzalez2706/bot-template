import "./DiagnosticModal.css"
interface props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>

}

export const DiagnosticModal = ({ setShowModal }: props) => {
  function handleClose() {
    setShowModal(false)
  }

  return (
    <div className="containerModal ">
      <div className="modal">
        {/* <img src="/public/template/popup-diagnostico1.png" className="imgPopUp" alt="" /> */}
        <p className='Text-area' >eius! Optio ipsam laudantium sequi reiciendis nostrum? Ratione ipsa neque officia perspiciatis corporis iusto tempora dolorem corrupti, at deleniti soluta quia in quae nihil illo maiores accusamus cupiditate, libero ex beatae quos expedita doloribus? Dicta eius excepturi illum consequuntur perspiciatis accusantium porro. Cum, nulla. Ad ratione nam velit ducimus aut est reprehenderit exercitationem consectetur, eligendi veritatis tempora, ea nihil iste fuga at a reiciendis nostrum natus harum sunt saepe maiores, perspiciatis labore? Ut, modi eveniet veritatis blanditiis ipsam ab deserunt voluptates nihil! Pariatur, libero illo sunt dolor voluptatem hic esse provident vel quidem ratione, quisquam autem dignissimos optio. Animi ab delectus temporibus. Dolorum facere provident modi debitis eos atque excepturi nulla corporis qui quis ducimus, ad enim quidem rerum aliquid. Quasi accusantium totam, nobis non asperiores voluptates magni doloribus sit at consequuntur deleniti soluta dolore, rerum quidem cupiditate repellendus fugiat officia eos! Veniam officia placeat mollitia non aut laborum amet at nesciunt, ipsam, illum libero similique dicta deserunt atque corporis quod?</p>
        <button className='CloseModal' onClick={handleClose}></button>
      </div>
    </div>
  )
}
