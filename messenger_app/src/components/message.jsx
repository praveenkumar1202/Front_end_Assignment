import React from 'react';
import Sidebar from './Sidebar';
import MainBody from './MainBody';

function message() {
  return (
    <div className="app">
      <div>
            <div className="app_body">
              <div className="sidebar">
              <Sidebar />
              </div>
              <div className="main_body">
              <MainBody/>
              </div>
            </div>
      </div>
    </div>
  )
}

export default message