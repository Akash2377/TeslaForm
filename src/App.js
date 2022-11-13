import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Tesla from "./pages/Tesla";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Report from "./pages/Report";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tesla" element={<Tesla />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/admin/:id" element={<EditPage />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}
export default App;
