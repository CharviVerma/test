import './App.scss';
import {Routes,Route} from 'react-router-dom';

import Home from "./pages/Home/index.js";
import LoginSignup from "./pages/Login/index.js";
import CheckUrl from "./Components/CheckUrl/index.js"
import Login from "./Components/Login/index.js"
import Signup from "./Components/Signup/index.js"




function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>,\
          {/* <Route index element={<checkUrl />} /> */}
        </Route>
        <Route path="/CheckUrl" element={<CheckUrl />}>
        </Route>
        <Route path="/LoginSignup" element={<LoginSignup/>}>
        </Route>
        <Route path="/Login" element={<Login/>}>
        </Route>
        <Route path="/Signup" element={<Signup/>}>
        </Route>
      </Routes>
  );
}

export default App;
