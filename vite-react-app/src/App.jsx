import Chai from './chai';

function App() {

  const username = "Bajaj Chirag";// agar mujhe yeh jsx main daalna hai hai toh mujhe isko {} main daalna hoga aur yahan main sirf evaluated expression hi daal skta hoon, iska mtlb ki koi if, for nhi daalan yahan pe

  return (
    <>
      <h1>Ram Ram ji {username}
      </h1>
      <Chai />
    </>
  )
}

export default App
