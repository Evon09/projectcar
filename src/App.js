import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    window.location.href = "https://192.168.4.1";
  }, [])

  return (
    <></>
  );
}

export default App;
