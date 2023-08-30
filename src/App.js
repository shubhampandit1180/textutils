import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
// import About from "./components/About";
import React from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar />
      <Alert alert={alert} />

      {/* <About /> */}
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces "
        />
      </div>
    </>
  );
}

export default App;
