import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Todo from './Todo/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaPlusCircle } from "react-icons/fa";  // Add this import

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;

