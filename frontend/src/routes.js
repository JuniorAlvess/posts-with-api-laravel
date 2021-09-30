import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route exact path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;