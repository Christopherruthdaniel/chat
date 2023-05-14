
import "./nav.scss";
import Chat from '../../assets/icons/nav/chat.png';
import  Message  from '../../assets/icons/nav/sms.svg';
  import  Follower  from '../../assets/icons/nav/follower.svg';
  import Trending from'../../assets/icons/nav/trending.svg';
  import SavedBeep  from '../../assets/icons/nav/saved.svg';
  import Business  from '../../assets/icons/nav/business.svg';
  import Settings  from '../../assets/icons/nav/setting.svg';
  import Requestv  from '../../assets/icons/nav/request.svg';
  import Sponsored  from '../../assets/icons/nav/beeps.svg';
  import LogOut  from '../../assets/icons/nav/logout.svg';

  
export default function Menu() {
 

  return (
    <div className="chatOnline">
       <ul>
        <li>
          <a href="/">
            <img className='img1' src={Message} alt="Home" />
       Message
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Follower} alt="Tour" />
           Followers
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Trending} alt="Beep" />
            Trending</a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={SavedBeep} alt="Saved Beeps" />
          Saved Beeps
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Business} alt="Business" />
         Business
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Settings} alt="Settings" />
          Settings
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Requestv} alt="Request Verification" />
          Request Verification
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Sponsored} alt="Sponsored Beep" />
         Sponsored Beep
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={LogOut} alt="Log Out" />Log Out
          </a>
        </li>
        <img className='img2' src={Chat} alt="Notification" />
        
      </ul>
    </div>
  );
}
