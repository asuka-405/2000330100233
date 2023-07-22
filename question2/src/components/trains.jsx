import axios from "axios"
import { useEffect, useState } from "react"
import TrainCard from "./card"

const Trains = () => {
  const [trains, setTrains] = useState([])
  const getTrains = async () => {
    await axios.post("http://127.0.0.1:3000/auth/auth")
    await axios
      .get("http://localhost:3000/trains")
      .then((res) => console.log(res))
      .then((res) => setTrains(res))
  }
  useEffect(() => {
    getTrains()
  }, [])

  return (
    <>
      {trains.map((train) => (
        <TrainCard key={train.number} name="train" />
      ))}
    </>
  )
}

export default Trains
