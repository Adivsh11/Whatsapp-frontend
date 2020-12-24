import React ,{useEffect, useState} from 'react';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import  './App.css';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const[messages, setMessages] = useState([]);


  useEffect(() =>{
    axios.get('/messages/sync').then((response) => {
        setMessages(response.data);
      });
  }, []);
 
  useEffect(() => {
    const pusher = new Pusher('b6ad7a1c4a5861d5a24b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    };

  },[messages]);
 


  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
