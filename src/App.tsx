import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/Products";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pages/products" element={<ProductPage />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contact-us" element={<ContactUs />} />
          <Route path="*" element={<div>404 — Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
