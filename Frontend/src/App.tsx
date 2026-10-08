import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskEasyHome from "./pages/TaskEasyHome/TaskEasyHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskEasyHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;