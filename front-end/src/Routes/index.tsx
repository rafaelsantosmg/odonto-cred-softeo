import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Router;
