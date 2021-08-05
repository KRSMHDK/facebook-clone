import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          alt=''
          src='https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png'
        />
        <div className='header__input'>
          <SearchIcon />
          <input type='text' />{' '}
        </div>
      </div>

      <div className='header__middle'>
        <div className='header__option'>
          <HomeIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar />
          <h4>Asd asd</h4>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;