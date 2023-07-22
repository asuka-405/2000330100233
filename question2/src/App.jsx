import Trains from "./components/trains"

import "./App.css"

async function App() {
  const fetchTrains = async () => {
    const response = await fetch("http://localhost:3000/trains").catch((err) =>
      console.log(err)
    )
    console.log(response.trains)
    return response.data
  }

  return (
    <>
      <Trains trains={await fetchTrains()} />
    </>
  )
}

export default App
