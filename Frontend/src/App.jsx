import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";
import Left from "./Home/Leftpart/Left";
import Right from "./Home/Rightpart/Right";
import { Navigate, Route, Routes } from "react-router-dom";

function hello() {
  const [authUser, setauthuser] = useAuth();
  console.log(authUser);
  return (
    
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />

      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
}
export default hello;
