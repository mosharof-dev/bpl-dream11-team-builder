

import { Suspense } from 'react'
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Players from './Components/HomePage/Players/Players'
import Navbar from './Components/Navbar/Navbar'

const FetchPlayer =  async() => {
const res = await fetch("/public/playerData.json")
return res.json();
}
function App() {
 const playerPromise = FetchPlayer()
  return (
    <>
    {/* Navbar Section */}
    <Navbar></Navbar>

    {/* Banner Section */}
    <Banner></Banner>

    {/* Player data */}
   <Suspense fallback={<div className='container mx-auto flex justify-center align-middle mt-[5%] '><span className="loading loading-bars loading-xl"></span></div>}>
     <Players playerPromise={playerPromise}></Players>
   </Suspense>
     
    

    </>
  )
}

export default App
