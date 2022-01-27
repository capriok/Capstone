import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
