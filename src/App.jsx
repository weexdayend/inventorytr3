import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Akses from "./pages/Akses";
import Home from "./pages/Home";
import Metro from "./pages/Metro";
import MetroWitel from "./pages/MetroWitel";
import PotensiPerangkat from "./pages/PotensiPerangkat";

function App() {
  return (
    <div className="flex bg-gradient-to-r from-blue-500 to-purple-500">
      <BrowserRouter>
        <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
          <Sidebar />
          <main role="main" className="container mr-6 my-5 p-8 bg-blue-50 rounded-3xl shadow-lg">
              <Routes>
                <Route path='/' element={<Navigate to='/dashboard' />} />
                <Route path='dashboard' element={<Home />} />
                <Route path='metro'>
                  <Route index={true} element={<Metro />} />
                  <Route index={false} path=':witel' element={<MetroWitel />} />
                </Route>
                <Route path='akses' element={<Akses />} />
                <Route path='potensi-perangkat' element={<PotensiPerangkat />} />
              </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
