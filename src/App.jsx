import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;

//<NavLink/> VS <Link/>
//<NavLink/> will give additional class when it is clicked called class="active" in the dom
