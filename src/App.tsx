import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFeild from './components/InputFeild';

const App: React.FC = () => {
  const [state, setstate] = useState<string>('');
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
