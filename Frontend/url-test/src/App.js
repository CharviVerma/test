import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home/index.js";
import CheckUrl from "./Components/CheckUrl/index.js"




function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>,\
          {/* <Route index element={<checkUrl />} /> */}
        </Route>
        <Route path="/CheckUrl" element={<CheckUrl />}>
        </Route>
        <Route path="/login" element={<CheckUrl />}>
        </Route>
      </Routes>
  );
}

export default App;
