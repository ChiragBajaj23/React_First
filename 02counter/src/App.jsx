import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15; // if we use it this way then and when we are updating it then it will change the value ,when we check the value in console the we can see it changing but the UI is not updating, so here react comes into picture, it updates this value in UI also, doesn't matter, in how many components this value is used. So we use hooks here.
  const [counter, setCounter] = useState(15); 

  const addValue = () => {
    // counter = counter + 1;
    if(counter < 20) {
      // setCounter(counter+1);
      // setCounter(counter+1);// yahan pe bahut saare setcounter add kiye hain, aisa lagg skta hai ki haar step pe update krega aur counter ki balue bahut jyada ho jaegi. lekin aisa hota nhi hai , value ek baar main sirf ek hi badhti hai, kyunki yeh kahani setcounter ki nhi useState ki hai, useState ,jobhi updates bhejne hain UI main aur variables main , vo saare batches main bhejta hai. Batches main pehele bhi bhejte the lekin ab fibre ke aane ke baad jyada control aa gaya hai. Toh vo batches main cheezon ko bhrta hai aur phir ek saath bhejta hai. Toh yahan pe kya hoga ki inn sab setcounter ka batch banega aur inko aap ek hi kaam ko reapeat kr rahe ho baar baar.
      // setCounter(counter+1);// ab yeh toh kaam nhi kr raha , lekin agar hume aisa kuch karane ki jarurat hai toh kya krnege, vaise toh yeh optimize approach nhi hai, lekin tab bhi agar aisa kuch karana ho toh hum kuch aisa krenge ki
      // setCounter(counter+1);// setcounter ek method hi hai , yeh callback accept krta hai , toh hum yahan pe isse iski last updated state maang rahe hai aur phir uspe kaam kr rahe hain, 
      // setCounter(counter+1);
      // setCounter((prevCounter) => {});// yahan pe hum prevCounter leke kaam kr rahe hain, hum chahe toh usko counter(jo uska naam hai vo bhi bol skte hai), aur yeh jo curly brace hai iski jarurat nhi varna kuch return krna padega
      setCounter((prevCounter) => prevCounter+1);// jab yeh callback kr through aata hai toh vahan pe complete hone ke baad ek doosra call hota hai aur vahan pe phir update hota hai
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter((prevCounter) => prevCounter+1);
      setCounter(counter+1);// yeh last main add krne pe jo bhi upar wale callback hain unka kuch effct nhi hoga , mtlb ki add nhi hoga , yeh sirf ek hi consider krega .
      setCounter((prevCounter) => prevCounter+1);// lekin iske niche add krne pe yeh niche wale callbakc ko bhi consider krega
      // yahan pe bunch of packages nhi hai ,lekin last state updated le raha hai pevcounter main.
    } else {
      alert('Max Value reached');
    }
    // console.log(counter);
  }
  
  const removeValue = () => {
    // counter = counter - 1;
    if(counter > 0) {
      setCounter(counter-1);
    } else {
      alert('Min. value reached');
    }
    // console.log(counter);
  }
  

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
