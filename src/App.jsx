import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"
// import japan from "./assets/japan.jpg"
import touristPlaces from "./touristPlaces"

function App() {
  const [count, setCount] = useState(0)
  const tourGuide= touristPlaces.map( (tour) => {
     return <Entry key= {tour.id}
                   {...tour} />
  })
  return (
    <>
      <Header />
      {tourGuide}
    </>
  )
}

export default App
