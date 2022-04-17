import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Home/Header/Header";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import PageNotFound from "./Pages/About/PageNotFound/PageNotFound";
import About from "./Pages/About/About/About";
import Login from "./Pages/Log/Login/Login";
import Register from "./Pages/Log/Register/Register";
import Checkout from "./Pages/About/Checkout/Checkout";
import RequireAuth from "./Pages/Log/ReqireAuth/ReqireAuth";
import ServiceDetail from "./Pages/About/ServiceDetail/ServiceDetail";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        />

        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        />

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
