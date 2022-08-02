import{ BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import LearnState from '../components/Pages/LearnState'
import LearnUseCallBack from "../components/Pages/LearnUseCallBack";
import NavBar from "../components/navbar/NavBar";
import LearningUseEffect from "../components/Pages/LearningUseEffect";


const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ReactDomRoutes>
        <Route path="/state" element={<LearnState />} />
        <Route path="/callback" element={<LearnUseCallBack />} />
        <Route path="/effect" element={<LearningUseEffect />} />
      </ReactDomRoutes>
    </BrowserRouter>
  )
    
}

export default Routes