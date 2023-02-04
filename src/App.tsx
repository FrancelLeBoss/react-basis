import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Certificats from './pages/Certificats';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import axios from 'axios';
import { setUsersData } from './feature/usersSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        dispatch(setUsersData(res.data))
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}
          element={<Home />}
        >
        </Route>
        <Route path={"/about"}
          element={<About />}
        ></Route>
        <Route path={"/services"}
          element={<Services />}
        ></Route>
        <Route path={"/products"}
          element={<Products />}
        ></Route>

        <Route path={"/certificats"}
          element={<Certificats />}
        ></Route>

        <Route path={"/contact"}
          element={<Contact />}
        ></Route>

        <Route path={"*"}
          element={<Home />}
        ></Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
