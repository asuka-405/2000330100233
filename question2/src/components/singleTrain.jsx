import axios from "axios"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useParams } from "react-router-dom"

const SingleTrain = () => {
  const { trainNumber } = useParams()
  if (trainNumber === undefined) {
    return (
      <div>
        <h1>404</h1>
        <h3>Train not found</h3>
        <Button href="/" className="mb-2" variant="primary">
          Go Back
        </Button>
      </div>
    )
  }
  const [train, setTrain] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      await axios.post("http://127.0.0.1:3000/auth/auth")
      await axios
        .get(`http://127.0.0.1:3000/trains/${trainNumber}`)
        .then((res) => {
          setTrain(res.data.train)
          setIsLoaded(true)
        })
    })()
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  const { trainName, departureTime, seatsAvailable, price, delayedBy } = train
  const { Hours, Minutes, Seconds } = departureTime
  const { sleeper, AC } = seatsAvailable

  return (
    <Card
      style={{
        padding: "1rem",
        minWidth: "10rem",
        border: "2px solid black",
      }}
    >
      <Card.Body className="mt-2">
        <Card.Title>{trainName}</Card.Title>
        <Card.Subtitle className="text-muted">{trainNumber}</Card.Subtitle>
        <Card.Text>
          {Hours}:{Minutes}:{Seconds}
        </Card.Text>
        <Card.Text>
          <h4>Seats</h4>
          Sleeper: {sleeper} @ {price["sleeper"]}/seat <br />
          AC: {AC} @ {price["AC"]}/seat
        </Card.Text>
        <Card.Text>Delayed By: {delayedBy} minutes</Card.Text>
        <Button href="/" className="mb-2" variant="primary">
          Go Back
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SingleTrain
