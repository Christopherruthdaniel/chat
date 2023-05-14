import './messenger.scss';
import Conversations from '../conversations/conversations';
import Message from '../message/message';
import Img from '../../assets/icons/image.svg';
import Nav from '../Nav/nav'
import { Avatar } from '@mui/material';
import Profilee from "../../assets/display-img.png";
import { useState } from 'react';
import Menuimg from '../../assets/three-dots-vertical.svg'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

function ActiveChats({toglelist,openchats}) {
  return(
<div className="chatBoxWrapper">
          
          <div className='upperchat'>
            <Avatar alt="Profile" src={Profilee} />
            <p>Amber Laxy <span>@Laxy4real2</span></p>
            <div className='left'>
              <button onClick={openchats}><img src={require('../../assets/sms-icon.png')} /></button>
              <button onClick={toglelist}><img src={Menuimg} /></button>

            </div>
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
  )
}

function NoChat() {
  return(
<div className='NoChatt'>
              <p className="title">Select a message</p>
              <p className="subTitle">Choose from current chat or start a new one.</p>
              <button>New Message</button>
            </div>
  )
}
export default function Messenger() {
 
    const [ActiveChat, setActiveChat] = useState(true)
    const [menuDrawer, setMenuDrawer] = useState(false)
    const [chatss, setChatss] = useState(false)
    const toggleDrawer = () => {
      setMenuDrawer((prevState) => !prevState)
    }
    const toggleleftDrawer = () => {
      setChatss((prevState) => !prevState)
    }
  return (
    // <>
            
      <div className="messenger">
      <Drawer 
            open={menuDrawer}
                onClose={toggleDrawer}
                direction='right'
            >
          <div className="chatMenuWrapper">
           
           <Nav/>
          </div>
      </Drawer>
      <Drawer 
            open={chatss}
                onClose={toggleleftDrawer}
                direction='left'
                wid
            >
          {/* <div style={{height:'100%'}} className="chatOnlineWrapper"> */}
           
           <Conversations/>
          {/* </div> */}
      </Drawer>
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
        {ActiveChat?<ActiveChats toglelist={setMenuDrawer} openchats={setChatss} />:<NoChat />}
            
          </div>
    
      </div>
    
    // </>
  );
}
