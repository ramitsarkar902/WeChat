import { Login ,Register,Home} from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-[100vh] bg-blue-300">
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home/>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
