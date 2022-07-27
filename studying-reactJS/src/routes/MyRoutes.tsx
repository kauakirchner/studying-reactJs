import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import LearnState from '../components/LearnState'
import RendCondicional from '../components/RendCondicional'
import NavBar from "../components/navbar/NavBar";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Form />} />
        <Route path="/learnState" element={<LearnState />} />
        <Route path="/condicionalRender" element={<RendCondicional />} />
      </Routes>
    </BrowserRouter>
  )
    
}

export default MyRoutes