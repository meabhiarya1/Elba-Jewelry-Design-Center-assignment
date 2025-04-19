import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import NewBlogPage from './pages/NewBlogPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path="/new" element={<NewBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
