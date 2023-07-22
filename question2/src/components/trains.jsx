import axios from "axios"
import { useEffect, useState } from "react"
import TrainCard from "./card"

const Trains = () => {
  const [trains, setTrains] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      await axios.post("http://127.0.0.1:3000/auth/auth")
      await axios.get("http://127.0.0.1:3000/trains").then((res) => {
        setTrains(res.data.trains)
        setIsLoaded(true)
      })
    })()
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const redirectBtn = () => {
    const trainNumber = `/train/${document.querySelector("#search-box").value}`
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "2rem",
        gap: "1rem",
      }}
    >
      <form>
        <input id="search-box" type="text" placeholder="train number" />
        <button onClick={() => redirectBtn()}>Search</button>
      </form>

      {trains.map((train, key) => {
        return <TrainCard train={train} key={key} />
      })}
    </div>
  )
}

export default Trains
