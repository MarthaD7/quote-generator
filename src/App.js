import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// Which code is better? The one above or 
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Quote />
//     </div>
//   );
// }