import Aside from "./compont/Aside";
import Navbar from "./compont/Navbar";
import Table from "./compont/Table";
import './App.css';
import { Routes , Route, Navigate } from 'react-router-dom';
import AddCust from "./compont/AddCust";
import ViewDetails from "./compont/ViewDetails";
import EditUser from "./compont/EditUser";


function App() {
  return (
    <div className="App bg-secondary-subtle m-0">
      <Aside className="h-100"/>
      <div className="wid bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"Home"} />} />
          <Route path="Home" element = {<Table />} />
          <Route path='Home'>
            <Route path="AddCutomer" element={<AddCust/>} />
            <Route path="ViewDetails/:id" element={<ViewDetails />} />
            <Route path="EditUser/:id" element={<EditUser/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
