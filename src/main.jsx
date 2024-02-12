import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyBtn from  "./Components/Button";
import MyContents  from "./Components/Content";
import MyHeader from "./Components/header";
import Left from  "./Components/left";
import Right from "./Components/right";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyHeader/>
    <MyContents/>
    <Left/>
    <Right/>
  </React.StrictMode>,
)
