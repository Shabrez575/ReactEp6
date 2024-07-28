import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import App from "./App";

// App - component composition happened here
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  ); 
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
);
