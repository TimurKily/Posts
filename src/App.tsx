import Posts from "./pages/posts/posts"
import postDetails from "./pages/postdetail/postDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Posts/>}/>
        <Route path="/posts/:id" element={<postDetails/>}/>
      </Routes>
    </Router>
  );
}
