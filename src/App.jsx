import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from "react-router-dom";
// import DisplayList from './components/DisplayList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
      <BrowserRouter>
        <Routes>
          <Route path="/products/create" element = {Form}/>
          {/* <Route path="/products/" element = {DisplayList}/> */}

        </Routes>
      </BrowserRouter>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
