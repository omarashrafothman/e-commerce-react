import "./main.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ourstore from "./pages/Ourstore";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="store" element={<Ourstore />} />

      <Route path="auth" element={<Ourstore />} />
      <Route path="login" element={<Login/>}/>
      <Route path="regestration" element={<Signin/>}/>
      
  
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
