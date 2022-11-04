import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ContactMe from "./pages/ContactMe";
import LinkTree from "./pages/LinkTree";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<LinkTree />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
