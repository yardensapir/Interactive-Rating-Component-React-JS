import "./styles.css";
import Rating from "./components/Rating.component.jsx";
import Thanks from "./components/Thanks.component.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Rating/>}/>
          <Route path="submit" element={<Thanks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
