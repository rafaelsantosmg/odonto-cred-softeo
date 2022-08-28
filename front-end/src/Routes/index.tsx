import { Route, Routes, Navigate } from 'react-router-dom';
import LoginRegister from '../Pages/LoginRegister';
import Home from '../Pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Router;
