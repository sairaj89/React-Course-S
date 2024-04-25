import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#201855'
      showAlert("Dark mode has been enabled", "success")
      document.title = "AnyText - Dark Mode"
      // setInterval(() => {
      //   document.title = "AnyText is Amazing mode"

      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install AnyText now"

      // }, 1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "AnyText - Light Mode"
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Anytext" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="about" element={<About mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="AnyText - Enter Text to make it Bold, Count Words, Clear Text" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
