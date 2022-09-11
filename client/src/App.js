import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/home/Home.jsx";
import Hotel from "./page/hotel/Hotel.jsx";
import Hotels from "./page/hotels/Hotels.jsx";
import Login from "./page/login/Login.jsx";
import NotFound from "./page/notFound/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/hotel/:id" element={<Hotel />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
