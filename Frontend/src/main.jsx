import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/socketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Authprovider>
    <SocketProvider>
    <App />
    </SocketProvider>
  </Authprovider>
  </BrowserRouter>
  
);
