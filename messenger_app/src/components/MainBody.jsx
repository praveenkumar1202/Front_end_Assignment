import React from 'react'
import'./MainBody.css'
import Avatar from "@mui/material/Avatar";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function mainBody( hey ) {
  return (
  <div className='chat_body'>  
      <div className="chat">
            <div className="chat_header">
                  <Avatar/>
            </div>
            <div className="chat_headerInfo">
                  <p>{hey.name}name</p>
                  <p>{hey.last_seen}last seen</p>
            </div>
            <div className="chat_headerRight">
              <IconButton id="header_icon"><SearchOutlinedIcon /></IconButton>
              <IconButton id="header_icon"><AttachFileIcon/></IconButton>
              <IconButton id="header_icon"><MoreVertIcon/></IconButton>
            </div>
      </div>
      <div className="chat_body">  
        
      </div>
    <div className="chat_footer">
        <div className="emoji">
            <InsertEmoticonIcon/>
        </div>
        
          <input type="text" placeholder='Type a message'/>
          <IconButton><SendIcon/></IconButton>
      
        <div className="chatMic">
            <MicIcon/>
        </div>
    </div>
    </div>
  )
}

export default mainBody;