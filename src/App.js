import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Container from './components/Container';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const handleSearch = () => {
    console.log("working")
  }
  return (
    <div className="App">
       <Header />
      <div style={{padding: '132px'}}>
       <Container handleSearch = {handleSearch} />
      </div>
    </div>
  );
}

export default App;

console.log("HELLO javascript::::")
