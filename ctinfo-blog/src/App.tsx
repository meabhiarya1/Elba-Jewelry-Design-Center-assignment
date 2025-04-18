// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import NewBlogPage from './pages/NewBlogPage';
import { EmailProvider } from "./context/EmailContext";

function App() {
  return (
    <EmailProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path="/new" element={<NewBlogPage />} />
        </Routes>
      </BrowserRouter>
    </EmailProvider>
  );
}


export default App
