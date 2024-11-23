import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

//  Root.render Method
//  import { createRoot } from 'react-dom/client'
      // const root = createRoot(document.getElementById("root"))

      // root.render(
      // <h1>Hello React!</h1>
      // )