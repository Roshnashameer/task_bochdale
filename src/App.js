import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Pnf from './pages/Pnf';
function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/*' element={<Pnf></Pnf> }></Route>
      </Routes>
     </div>
  )
}
export default App;

