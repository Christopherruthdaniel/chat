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
            <p>Amber Laxy <span>@Laxy4real2</span></p>
          </div>
          
          <div className="chatBoxTop">
            <Message imgs={Profilee} chat='helo dog' />
            <Message own={true} chat='helo dogssss' imgs={require('../../assets/avatar6.png')}/>
            <Message imgs={Profilee} pic={Profilee} />
            <Message imgs={Profilee} chat='hello Lion' />
            <Message imgs={Profilee} chat='hallo'/>
            <Message imgs={Profilee} chat='hello dog'/>

                
                </div>
            
             
                <div className="chatBoxBottom">
                  <input className='chatMessageInput' placeholder='Type a message'/>
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
