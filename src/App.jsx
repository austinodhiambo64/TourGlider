import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './assets/components/Layout/Landing'
import DestinationList from './assets/components/DestinationList'
import DestinationDetail from './assets/components/DestinationDetail'
import Wishlist from './assets/components/Wishlist'
import WishlistItem from './assets/components/WishlistItem'
import Signup from './assets/components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/destinations" element={<DestinationList />} />
        <Route path="/details" element={<DestinationDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/selecteditem" element={<WishlistItem />} />
        <Route path="/details" element={<DestinationDetail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
