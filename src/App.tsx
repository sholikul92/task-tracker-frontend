import { AddTask } from "./pages/AddTask";
import { EditTask } from "./pages/EditTask";
import { Task } from "./pages/Task";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Task />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/edit/:id' element={<EditTask />} />
      </Routes>
    </>
  );
}

export default App;
