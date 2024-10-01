test

do tareke se project banaya hai ->

1) npx wala tareka jo ki purana hai -> node package executable , ismain apna project ka naam diya aur iske andar saare packages install ho jaate hain bohot saare aise hain jinki jarurat nhi, yeh thoda time taking hai
2) doosra tareeka lagaya hai Vite use krke, iske andar hum npm ka hi use krte hain aur vite command hoti hai jiski madad se krte hain. Vite ek bundler hai, jo ki important files ko bundle krke hume dedta hai, iske baad hum npm install krke node modules ko daal leete hain apne project main aur yeh cheez overall kam time legi.

Dono main hi package.json file ko dekhna hai pehele  , kyunki usmain kaafi kuch kaam ka mil jaata hai aur kuch kuch samjhne wala bhi hai.

baaki react.dev ki documentation main mil jaega yeh sab, lekin vo thodi high level ho skti hai, phr bhi pdhne ki try kijiye vahan se Bajaj Sahab.

main.jsx and index.js -> // react apna ek DOM bana raha hai jo ki update hota hai aur yaha pe hum dikha rahe hain vo cheez jo hume show krni hai aur phir isko render kr raha hai. Yahan chaahe toh react.strictmode ko remove krskte ho, lekin uska exact kaam aage aa jae kya pata

// function ka naam capital main hi preferred hai

// Vite main component banane ke liye .jsx ka hi use krna hoga, jinn files se jsx return ho raha hai unka naam ke extension main jsx rakho. Vite jaise bundles main yeh cheez jaruri hai lekin normal react app main yeh cheez krskte hain agar krni ho toh

index.html -> SPA- singlpage application kyunki ek hi toh div hai aur yeh ek hi page ko call kr raha hai. Script main yhan se kaam ho raha hai, lekin 01basic wale project main script , package.json file main hai vahan se cheezen ho rahi hain

CUSTOM REACT

humne custom react library banai. Hum yeh dekh rahe hain ki react behind the scene kaise kaam krti hogi. humne index.html file main div root rakha aur customreact.js file ko call kiya phir uss file main queryselector liya aur apne ek tareka rakha reactElement object main jismain ki kiss tarah se humare tags ko rakhna hai aur phir usko render krne ke liye humne apna ek function bana diya. isko compare kr skta hai baaki dono projects ki file main jaa ke vahan ki working dekhke

jo humare react ke jsx elements hain, unko react convert kr dega some sort of

const reactElement= {

    type :'a',

    props: {

    href:"https://google.com",

    target:"_blank"

    },

    children:'Click to Visit Here'

}

aisi cheez main, jo ki iske complier ke liye padhni aasan hai , exactly yeh nhi hai vo , uske liye github pe iski repository dekhni padegi, lekin abhi ke liye jo customer react function main likha uski baat kr raha hoo main., usmain yeh kiya humne.

lekin baat aisi hai ki agar react usmain convert krta hai complie krne ke liye toh kya hum direct hi reactElement ko hi jsx main daal skte hain kya ? -> yeh wala kaam nhi krega kyunki yeh humne apne customer react ke liye likha hai lekin render krne ke liye humne react ka function use kiya toh iske liye baat nhi bani


createRoot() method - ek DOM create krta hai, yeh browser se alag ek DOM create krta hai. yeh main DOM aur apne DOM ko compare krta hai aur sirf unn chezon ko update krta hai jo actually main UI main update hui hai, lekin aapka browser poore DOM ko repaint krta hai aur reload krta hai , isi ko page reload bolte hain. yeh Javascript jo apna poora DOM banata hai aur track rakhta hai , issi ko hi virtual DOM bolte hain. 

lekin ab agar koi aisa element hai iss virtual DOM main jo ki Network section pe dependent hai aur button main change krne se update ho raha hai toh uske liye hume kuch optimize krna hoga taaki agar do teen updation aa rahr toh latest wala hi update ho baar baar krne ki jarurat nhi

https://github.com/acdlite/react-fiber-architecture   ---> go thorugh fibre here just read

hydration - virtualDOM jab bana toh vahan pe buttons aa gae aur baaki saare elements aa gae lekin kisi pe bhi click nhi hota initially kyunki javascript abhi tk nhi aai hai, toh jab weblayout bana gaya aur javascript inject ho gai toh uss process ko hydration bolte hain. matlb ab vo kaam kne lagega.

reconcialition - React uses to diff one tree with another to determine which parts need to be changed. It is the algorithm behind virtual DOM.

virtual DOM se better approach fibre hai .kyunki jo saare elements honge iss tree ke , unko aise update krna hai jab baar baar api se data aa rhaa hai aur kb kiss operation ko abort kr dena hai. baaki doc main kuch baatein hain vo padhi jaa skti hain.

fibre aane ke baad ek cheez yeh bhi hai ki diffing of list(array jaise) is performed using keys.

different types of update have different priority - animation ki jyada hogi data store se

pus-based approach requires me to make decisions ad pull-based approach requires the React to make decisions


Tailwind - https://tailwindcss.com/docs/installation/framework-guides

iss link pe vite select kiya tha kyunki vite ko leke project banaya tha, ismain hume follow krna hai commands ko aur tailwwind ka use krna hai. dimmag khol ke rakhna use krte hue.
