
import "./Chat.css";

interface props {
  text: string,
  isUser?: boolean,
}

export const Chat = ({ text, isUser = false }: props) => {
  return (
    < div className={isUser ? 'chat-user' : 'chat-bot'} >
      <p className='Text-area' >{text}</p>
    </div >
  )
}
