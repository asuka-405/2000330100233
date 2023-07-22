import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import SingleTrain from "./components/singleTrain"
import Trains from "./components/trains"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trains />} />
        <Route path="/trains" component={<Trains />} />
        <Route path="/train/:trainNumber" element={<SingleTrain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
