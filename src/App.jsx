import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import EmailForm from "./pages/EmailForm";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={EmailForm} />
          <Route path="/Terms" Component={Terms} />
          <Route path="/Policy" Component={Policy} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
