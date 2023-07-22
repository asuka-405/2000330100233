import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime } = train
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
          {departureTime["Hours"]}:{departureTime["Minutes"]}:
          {departureTime["Seconds"]}
        </Card.Text>
        <Button className="mb-2" variant="primary">
          Select Train
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TrainCard
