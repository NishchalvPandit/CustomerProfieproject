import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CustomerProfile from "./pages/CustomerProfile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerprofile/:id" element={<CustomerProfile />} />

      </Routes>
    </BrowserRouter>



  )

}
export default App;