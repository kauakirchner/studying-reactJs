import{ BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Form from "../components/Form";
import LearnState from '../components/LearnState'
import RendCondicional from '../components/RendCondicional'
import LearnUseCallBack from "../components/LearnUseCallBack";
import NavBar from "../components/navbar/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ReactDomRoutes>
        <Route path="/" element={<Form />} />
        <Route path="/state" element={<LearnState />} />
        <Route path="/render" element={<RendCondicional />} />
        <Route path="/callBack" element={<LearnUseCallBack />} />
      </ReactDomRoutes>
    </BrowserRouter>
  )
    
}

export default Routes