import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyForm from './MultiForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyForm />
  </React.StrictMode>,
)
