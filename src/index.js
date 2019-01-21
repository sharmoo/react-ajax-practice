import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import sendPost from './components/sendPOST'

ReactDOM.render(<App sendPost={sendPost} />, document.getElementById('app'))