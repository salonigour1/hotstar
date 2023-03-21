// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<MovieDetail />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
