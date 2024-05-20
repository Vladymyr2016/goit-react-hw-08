import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NotFound from './components/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk(), [dispatch]);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
