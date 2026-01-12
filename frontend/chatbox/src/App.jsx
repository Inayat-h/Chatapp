import { Routes, Route, Navigate } from "react-router-dom";
import Left from './leftpart/left';
import Right from './rightpart/Right';
import Sighnup from './components/Sighnup'
import Login from './components/login';
import { useAuth } from './authprovider';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';

function App() {
  const [Authuser] = useAuth();
  console.log(Authuser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            Authuser ? (
              <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-100 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div>
            ) : (
              <Navigate to="login" />
            )
          }
        />
        <Route
          path="login"
          element={Authuser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={Authuser ? <Navigate to="/" /> : <Sighnup />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
