import TrainCard from "./card"

function Trains({ trains }) {
  return (
    <>
      {trains.map((train) => (
        <TrainCard key={train.number} name="train" />
      ))}
    </>
  )
}

Trains.prototype = {
  trains: [],
}

export default Trains
