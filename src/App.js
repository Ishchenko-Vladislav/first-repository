import "./App.css";
import Header from "./allsrc/header/header";
import Sidebar from "./allsrc/sidebar/sidebar";
import Profile from "./allsrc/profile/profile";
import Message from "./allsrc/message/message";
import Footer from "./allsrc/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./allsrc/news/news";
import Music from "./allsrc/music/music";
import Settings from "./allsrc/settings/settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="main">
          <Routes>
            <Route
              path="/Profile"
              element={
                <Profile posts={props.store.posts} dispatch={props.dispatch} />
              }
            />
            <Route
              path="/Message/*"
              element={
                <Message
                  dialogs={props.store.dialogs}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>

          {/* <Profile /> */}
          {/* <Message /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
