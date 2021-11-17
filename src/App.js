import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./routes/MainPage";
import SubPage from "./routes/SubPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/sub" element={<SubPage/>}/>
    </Routes>
  );
}

export default App;
