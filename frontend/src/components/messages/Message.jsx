import {useAuthcontext} from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
const {authUser}=useAuthcontext();
const {selectedConversation}=useConversation()
const fromMe = message.senderId ===authUser._id;
const formattedTime = extractTime(message.createdAt);
const chatClassName = fromMe ? 'chat-end' : 'chat-start';
const profilepic = fromMe ? authUser.profilepic: selectedConversation?.profilepic;
const bubbleBgcolor = fromMe? 'bg-blue-500':"";

const shakeClass= message.shouldShake ?"shake" : ""
 
return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img
            alt='Tailwind CSS chat bubble component'
          src={profilepic}
          />

        </div>
      </div>
      <div className={`chat-bubble text-white ${ bubbleBgcolor} ${shakeClass} pb-3`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  )
}

export default Message
