import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Header/index.js";



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
