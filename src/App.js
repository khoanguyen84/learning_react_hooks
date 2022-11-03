import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu/Menu';
import MainUseContext from './components/UseContext/MainUseContext';

function App() {
  return (
      <div className="container mt-2">
        <div className='row'>
          <div className='col-2'>
            <Menu />
          </div>
          <div className='col-10'>
            <Routes>
              <Route path='/' element={<MainUseContext />} />
              <Route path='/use-context' element={<MainUseContext />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
