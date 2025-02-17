  
import Chatbox from '../../components/Chatbox/Chatbox';
import Leftsidebar from '../../components/LeftSidebar/Leftsidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import './Chat.css'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <Leftsidebar/>
        <Chatbox/>
        <RightSidebar/>

      </div>
    </div>
  )
}

export default Chat;
