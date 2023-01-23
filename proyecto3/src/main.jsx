import React from 'react';
import { initializeApp } from "firebase/app";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyB7XF_GyjlEz6ZT_TXcQbFB2lIYJ7G_lWs",
  authDomain: "hoobank-4874b.firebaseapp.com",
  projectId: "hoobank-4874b",
  storageBucket: "hoobank-4874b.appspot.com",
  messagingSenderId: "281749224464",
  appId: "1:281749224464:web:908526c809c84370815e95"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
