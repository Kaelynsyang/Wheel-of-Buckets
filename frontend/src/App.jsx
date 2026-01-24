import {Route, Routes} from "react-router";

import HomePage from "./pages/HomePage";
import CreateBuckets from "./pages/CreateBuckets";
import SpinWheel from "./pages/SpinWheel";
import NoteDetailPage from "./pages/NoteDetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/createBuckets" element={<CreateBuckets />} />
        <Route path = "/spinWheel" element={<SpinWheel />} />
        <Route path = "/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};
export default App;
