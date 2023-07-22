import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const TrainCard = (trainData) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{trainData.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </Card.Text>
        <Button variant="primary">Select Train</Button>
      </Card.Body>
    </Card>
  )
}

export default TrainCard
