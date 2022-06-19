import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import AboutPage from './components/AboutPage/AboutPage';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route  path='/blog' element={<Blog></Blog>}></Route>
        <Route  path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}
export default App;
