import './App.css';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NotFound from './components/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
