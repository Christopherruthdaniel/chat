import "./conversations.scss";
import { styled, alpha, InputBase, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SMS from "../../assets/sms-icon.png";
import Profilee from "../../assets/avatar6.png";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  // marginTop:'20px',

  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "150px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    fontSize: "10px",
    [theme.breakpoints.up("md")]: {
      width: "15ch",
    },
  },
  fontfamily: "Nunito",
}));

function Online({ppic,stats}) {
  return(
    <div className="conversationimg">
    <div style={{
      backgroundColor:stats==='Online'?'green':'grey',
      height:'10px',
      width:'10px',
      // position:'absolute',
      // right:1
      marginLeft:'30px',
      borderRadius:'50px',
      zIndex:2

    }}/>
        <Avatar alt="Profile" src={ppic} />
    </div>
  )
}
export default function Conversations() {
  const [chats, setChats] = useState([
    {
      img:require('../../assets/avatar9.png'),
      Name:'Christopher Ruth',
      username:'@cruth123',
      message:'Hi dear,...',
      stats:'Online',
      time:'Just now',
      unread:0
    },
    {
      img:require('../../assets/sarah_dp.png'),
      Name:'Chi chi',
      username:'@hotbabechi',
      message:'Lorem ipsum ',
      stats:'Offline',
      time:'1 hour ago',
      unread:2

    },
    {
      img:require('../../assets/mark-avatar.png'),
      Name:'Obbina Alex',
      username:'@KingObi6',
      message:'Hi Maddame',
      stats:'Online',
      time:'8 hours ago',
      unread:0

    },
    {
      img:require('../../assets/avatar9.png'),
      Name:'Christopher Ruth',
      username:'@cruth123',
      message:'Hi dear,...',
      stats:'Online',
      time:'Just now',
      unread:0
    },
    {
      img:require('../../assets/sarah_dp.png'),
      Name:'Chi chi',
      username:'@hotbabechi',
      message:'Lorem ipsum ',
      stats:'Offline',
      time:'1 hour ago',
      unread:2

    },
    {
      img:require('../../assets/mark-avatar.png'),
      Name:'Obbina Alex',
      username:'@KingObi6',
      message:'Hi Maddame',
      stats:'Online',
      time:'8 hours ago',
      unread:0

    },
  ])
  return (
    <>
      <div className="Top">
        <Avatar alt="Profile" src={Profilee} />

        <p>Messages</p>
        <img src={SMS} alt="" />
      </div>

      <div className="div">
        <div className="searchTop">
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search message"
              inputProps={{ " Nunito": "search" }}
            />
          </Search>

          <a className="ahref" href="/">
            Message Request
          </a>
        </div>
        <div className="AllConversation">
          {chats.map(i=>{
            return(
              <div className="conversation">
            <Online ppic={i.img} stats={i.stats} />
            {/* <img className="conversationimg" src="" alt="" /> */}
            <div className="span">
              <span className="conversationName">{i.Name} <span style={{color:'gray',fontWeight:'normal'}}>{i.username}</span></span>
              <span className="conversationMessage">
                {i.message}
              </span>
              <span className="conversationMessage" style={{color:'gray',fontWeight:'normal'}}>{i.unread>0?<span style={{backgroundColor:'#386fa4', padding:"2px",fontSize:'10px',color:"white", borderRadius:'50px'}}>{i.unread}+</span>:null} {i.time}</span>
            </div>
          </div>
            )
          })}
          

          
          
        </div>
        
      </div>
    </>
  );
}
