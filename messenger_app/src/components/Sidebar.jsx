import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from "@mui/icons-material/Search";
import AvatarImg from "../images/profile-image.jpg";
import "./sidebar.css";
import { IconButton } from "@mui/material";
import message from "../json/message.json";
import { useState } from 'react';
import MainBody from "./MainBody";

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [messageState, setMessageState] = useState(false);

  function onSetMessage() {
    setMessageState(true)
  }
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-header">
          <div id="header-left">
            <Avatar alt="my profile" src={AvatarImg} />
          </div>
          <div id="header-right">
            <IconButton><GroupsIcon/></IconButton>
            <IconButton><ChatIcon /></IconButton>
            <IconButton><DonutLargeIcon /></IconButton>
            <IconButton><MoreVertIcon /></IconButton>
          </div>
        </div>
        <div className="sidebar-search">
          <div className="sidebar-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search or start new" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>
        </div>
        <div className="chatDisplay">
        {message[0].data.filter((ele) =>
             ele.name.toLowerCase().includes(searchQuery.toLowerCase())).map((ele) => {
          return (
            // {console.log(ele, "element")}
              
            <div id="contacts" key={ele.id} onClick={onSetMessage}>
              {messageState ? <MainBody params="hey"/> : ""}
              
              <div id="contact-image">
                <Avatar alt="contact1" src={ele?.icon}></Avatar>
              </div>
              <div id="contact-name">
                <p id="Name">{ele?.name || "no name available"}</p>
                <p id="message">{ele?.message || "no message"}</p>
              </div>
              
            
              {/* <div className="lastSeen">
                <p>{ele?.last_seen || "failed to upload last seen"}</p>
              </div> */}
              {/* <Avatar alt="contact 1" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png" />
              <Avatar alt="contact 2" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png" />
              <Avatar alt="contact 3" src="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2021/06/Trent-Boult-1.jpg" /> */}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
      }

export default Sidebar;
