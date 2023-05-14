import './messenger.scss';
import Conversations from '../conversations/conversations';
import Message from '../message/message';
import Img from '../../assets/icons/image.svg';
import Nav from '../Nav/nav'
import { Avatar } from '@mui/material';
import Profilee from "../../assets/display-img.png";


export default function Messenger() {
 
    
  return (
    <>
 
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
           
           <Nav/>
          </div>
        </div>

        <div className="chatOonline">
          <div className="chatOnlineWrapper">
           
           <Conversations/>
          </div>
          
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
          
          <div className='upperchat'>
            <Avatar alt="Profile" src={Profilee} />
          </div>
          
          <div className="chatBoxTop">
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>

                
                </div>
            
             
                <div className="chatBoxBottom">
                  <textarea className='chatMessageInput' placeholder='Type a message'></textarea>
                  <button className="chatSubmitButton" >
                   <img src={Img} alt="" />
                  </button>
                </div>
            
            </div>
          </div>
    
      </div>
    
    </>
  );
}
