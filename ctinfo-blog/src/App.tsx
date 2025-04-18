// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage';
import NewBlogPage from './pages/NewBlogPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path="/new" element={<NewBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
