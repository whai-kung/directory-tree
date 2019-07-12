import ReactDOM from 'react-dom'
import React from 'react'
import Main from './app'

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.hydrate(<Main />, wrapper) : false;