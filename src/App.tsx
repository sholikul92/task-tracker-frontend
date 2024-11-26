import { Task } from "./pages/Task";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
