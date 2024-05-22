import './App.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/operations';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { selectIsRefresh } from './redux/auth/slice';

function App() {
  const isRefresh = useSelector(selectIsRefresh);
  console.log(isRefresh);
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
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
