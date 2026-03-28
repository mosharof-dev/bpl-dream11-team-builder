

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Players from './Components/HomePage/Players/Players'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer/Footer'

const FetchPlayer =  async() => {
const res = await fetch("/public/playerData.json")
return res.json();
}


function App() {

  //  === Player Price ===
const [coin, setCoin] = useState(5000)

 const playerPromise = FetchPlayer()
  return (
    <>
    {/* Navbar Section */}
    <Navbar  coin={coin}></Navbar>

    {/* Banner Section */}
     <Banner coin={coin} setCoin={setCoin}></Banner>

    {/* Player data */}
   <Suspense fallback={<div className='container mx-auto flex justify-center align-middle mt-[10%] '><span className="loading loading-bars loading-xl"></span></div>}>
     <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin}></Players>
  </Suspense>

  <Footer></Footer>
     
      <ToastContainer />

    </>
  )
}

export default App
