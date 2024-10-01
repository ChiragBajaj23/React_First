import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function mm() {
  return (
    <h1>asdfghjklkjhgfd</h1>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* mm() it wotn work here, it will work outside alone */}
    <App />
  </StrictMode>,
    // mm()
    // <App />
)
