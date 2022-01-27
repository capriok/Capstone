import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
