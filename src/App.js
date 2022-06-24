import logo from "./logo.svg";
import "./App.css";
import Header from "./allsrc/header/header";
import Sidebar from "./allsrc/sidebar/sidebar";
import Profile from "./allsrc/profile/profile";
import Message from "./allsrc/message/message";
import Footer from "./allsrc/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Message" element={<Message />} />
          </Routes>

          {/* <Profile /> */}
          {/* <Message /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
