import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import UserList from "./components/UserList";
import Read from "./components/Read";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/messageList" element={<Read />} />
          <Route exact path="/userList/:id" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
