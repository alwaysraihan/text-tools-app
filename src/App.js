
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './style.css';
function App() {
  return (
<>
<Navbar title="TextTools"/>
<div className="container my-5">
<TextForm heading="Enter the text to analyze below"/>

  </div>
</>
  );
}

export default App;
