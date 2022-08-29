import MainContext from './Context';
import Router from './Routes';
import './App.css';

export default function App() {
  return (
    <MainContext>
      <Router />;
    </MainContext>
  );
}
