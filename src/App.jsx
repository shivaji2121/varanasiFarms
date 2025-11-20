import { BrowserRouter ,Routes,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

const App = () => {
  return (
   <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
      </Routes>
      
    </div>
   </BrowserRouter> 
    
  )
}

export default App
