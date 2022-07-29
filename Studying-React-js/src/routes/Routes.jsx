import{ BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import LearnState from '../components/LearnState'
import LearnUseCallBack from "../components/LearnUseCallBack";
import NavBar from "../components/navbar/NavBar";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ReactDomRoutes>
        <Route path="/state" element={<LearnState />} />
        <Route path="/callBack" element={<LearnUseCallBack />} />
      </ReactDomRoutes>
    </BrowserRouter>
  )
    
}

export default Routes