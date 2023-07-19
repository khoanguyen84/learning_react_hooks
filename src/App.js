import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './components/Content';
import { ThemeContext } from './ThemeContext/Provider';
import { useContext } from 'react';

// Context
// 1. createContext
// 2. Provider
// 3. Consumer
function App() {
  const consumer = useContext(ThemeContext)
  return (
    <>
      <button onClick={consumer.handleChangeTheme}>Toggle Theme</button>
      <Content />
    </>
  );
}

export default App;
