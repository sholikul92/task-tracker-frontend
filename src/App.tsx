import { AddTask } from "./pages/AddTask";
import { Task } from "./pages/Task";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
    </>
  );
}

export default App;
