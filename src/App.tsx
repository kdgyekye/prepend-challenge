import React from 'react';
import MainComponent from "./pages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainComponent/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
