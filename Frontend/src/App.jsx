import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";
import Left from "./Home/Leftpart/Left";
import Right from "./Home/Rightpart/Right";

function hello() {
  const [authUser, setauthuser] = useAuth();
  console.log(authUser);
  return (
    //<Login/>
    <Signup />
  );
}
export default hello;
