import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {chatsListe} from '../../adopt-un-chat/src/datas/adoptMe'


import ContainerCard from "../src/components/ContainerCard"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="containerListe">{chatsListe.map(chat=> <ContainerCard key={chat.id}  chat={chat}/>)}   </div>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
