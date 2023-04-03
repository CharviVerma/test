import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home/index.js";
import BootStrap from "bootstrap";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<checkUrl />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
