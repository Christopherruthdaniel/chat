import "./conversations.scss";
import {
    
    
    styled,
    alpha,
    InputBase,
   
  } from '@mui/material';
  import SearchIcon from '@mui/icons-material/Search';
  import Img from '../../assets/icons/image.svg';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    backgroundColor: alpha(theme.palette.common.white, 0.10),
    marginTop:'20px',
    

    
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '200px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '80%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  }));
   
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '15ch',
      },
    },
    fontfamily: 'Nunito',
  }));

  

export default function Conversations(){
    return(
        <>

            <div className="Top">
              <p>Messages</p>
              <img src={Img} alt="" />

            </div>
     
        <div className="div">

        <div className="searchTop">
              <Search sx={{ display: { xs: 'none', md: 'flex' } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search message'
                  inputProps={{ ' Nunito': 'search' }}
                />
              </Search>
              
              <a  className="ahref" href="/"> Message Request</a>
            </div>
          
     
            <div className="conversation">
           <img className="conversationimg" 
           src=""
           alt=""
           />
           <div className="span">
           <span className="conversationName">Ruth Recennine</span>
           <span className="conversationMessage">i guess the work will be done by tomorrow</span>
           
           
        </div>   
        </div>
     

         
          
             <div className="conversation">
           <img className="conversationimg" 
           src=""
           alt=""
           />
           <div className="span">
           <span className="conversationName">Ruth Recennine</span>
           <span className="conversationMessage">i guess the work will be done by tomorrow</span>
           
           
        </div>   
        </div>
        </div>
        </>
    )
}

  