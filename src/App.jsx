
import Navbar from './component/Navbar/Navbar'
import './App.css'
import Banner from './component/Banner/Banner'
import { Suspense } from 'react'
import Players from './component/Player/Players'


const playerPromise=fetch("/playerDatas.json").then(res=>res.json())
.catch(error=> console.log("player data fetching failed",error))




function App() {


  return (
    <>
  <header className='w-[90%] mx-auto'>
  <Navbar></Navbar>
   <Banner></Banner>
  </header>

<main className=' w-[90%] mx-auto'>
<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <Players  playerPromise={playerPromise}>
  </Players>
</Suspense>

</main>

    </>
  )
}

export default App
