import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Posts from "./components/posts/Posts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Settings" element={user ? <Settings /> : <Register />} />
        <Route path="/Login" element={user ? <Home /> : <Login />} />
        <Route path="/Post/:postId" element={<Single />} />
        <Route path="/Blog" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
