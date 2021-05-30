import React from 'react';
import Chat from './Chat';
import'./ChatNovoMessage.css';
import Sidebar from './Sidebar';

const ChatNovoMessage = () => {
    return (
        <div className="ChatNovoMessage">
            <Sidebar></Sidebar>
            <Chat></Chat>
            
        </div>
    );
};

export default ChatNovoMessage;