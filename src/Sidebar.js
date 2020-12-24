import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat.js';

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar_header">
      <Avatar src='https://images.indianexpress.com/2019/11/ronaldo-1200.jpg' />
        <div className="sidebar_headerRight">
      
          <IconButton>
          <DonutLargeIcon />
          </IconButton>
          <IconButton>
          <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
          
          
        </div>
      </div>
      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
