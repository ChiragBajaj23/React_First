import React from 'react'// be carefule yahan pe pehele Strict mode tha React ki jagaha pe
import { createRoot } from 'react-dom/client'// yahan pe reactDOM bhi use ho skta hai instead of createRoot, niche bhi change krna hoga jahan pe yeh use ho raha
// import {jsx as _jsx} from "react/jsx-dev-runtime.js";// isse bhi hum direct evaluated expression jo humara hai usko create kr skte hain , createElement ki jarurat nhi padegi , lekin yeh thoda complex hoga
import App from './App.jsx'

function MyApp() {
  return(
    <h3>yeh bhai function hai hum isko bhi likh skte hain aur direct hi jsx main use kr skte hain. Aur kyunk yeh function hai toh isko MyApp() tareeke se bhi likh skte hain jsx main lekin likhenge nhi, vo achi pratice nhi hai</h3>
  )
}

// const reactElement = {
//   type : 'a',
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: 'Click to Visit Here'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>bhaiiiiiiiiiiii</a>
// )
const anotherUser = "Cthirag Bajaj";// yahan pe isko add kr rahe hain, yeh variable {} main add hua hoga jsx main aur yahan pe aise aaega, kyunki yeh object main aise aa raha hai isliye yeh calculated hi hona chaiyeh
const rElement = React.createElement( // yeh inject ho jaata hai, isko babel inject krta hai
  'a',
  {href:"https://google.com", target:'_blank'},
  'clcik me to visit googleeeee',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <MyApp />
  // reactElement
  // anotherElement // yeh kaam kr raha hai. lekin ab dekhte hain ki agar hume isko uss format main dena ho jiss main react convert kr raha hai html ko , toh vo kya hoga
  rElement
)
// react apna ek DOM bana raha hai jo ki update hota hai aur yaha pe vahi raha hai