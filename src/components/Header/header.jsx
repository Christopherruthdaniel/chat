import {
    AppBar,
    Toolbar,
    styled,
    alpha,
    InputBase,
   
  } from '@mui/material';
  // import { Link } from "react-router-dom";
  // import { useContext } from "react";
  // import React, { useState } from 'react';
  import logo from '../../assets/chatbeep_logo.png';
  import SearchIcon from '@mui/icons-material/Search';
  import  Home  from '../../assets/homeicon.svg';
  import  Tour  from '../../assets/tour-icon.png';
  import  Beep from '../../assets/beep-icon.png';
  import Notification  from '../../assets/notification-icon.svg';
  import './Header.scss';
 
  const Logo = styled('img')(({ theme }) => ({
    width: '50px',
    minWidth: '50px',
  }));
  
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '16px',
    backgroundColor: alpha(theme.palette.common.black, 0.10),
    
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '450px',
      left: '60px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

 
  const Header = () => {
   
  //  const { user } = useContext();
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  
    return (
      <AppBar position='static' className='header' color='secondary'>
        <Toolbar className='toolbar'>
          <Logo src={logo} />
          <Search sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ ' Nunito': 'search' }}
            />
          </Search>
          <nav>
      <ul>
        <li>
          <a href="/">
            <img className='img1' src={Home} alt="Home" />
          Home
          </a>
        </li>
        <li>
          <a href="/">
          <img className='img1' src={Tour} alt="Tour" />
            Tour
          </a>
        </li>
        <li>
          <a href="/about">
          <img className='img1' src={Beep} alt="Beep" />
            Beep</a>
        </li>
        <li>
          <a href="/contact">
          <img className='img1' src={Notification} alt="Notification" />
            Notification
          </a>
        </li>
        
      </ul>
      
    </nav>
  
  
       
        </Toolbar>
     
      </AppBar>
    );
  };
  
  export default Header;
  