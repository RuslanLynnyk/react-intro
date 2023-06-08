import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

import './App.css'
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";


function App() {
  return (
    <div className="app">

        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/users" element={<Users />} />
               <Route path="/users/:userId" element={<User />} /> 
               <Route path="/about" element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} />

            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
    
    </div>
  );
}

export default App;
