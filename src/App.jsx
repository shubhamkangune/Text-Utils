import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TextForm from  './components/TextForm';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.classList.add('bg-gray-900', 'text-white');
    document.body.classList.remove('bg-white', 'text-black');
  } else {
    setMode('light');
    document.body.classList.add('bg-white', 'text-black');
    document.body.classList.remove('bg-gray-900', 'text-white');
  }
};


  return (
    <>
      {/* navbar */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText={"AboutUs"} />

      {/* textform */}
      <div className="container mx-auto my-3">
<TextForm heading="Enter the text to analyze below" />
</div>

      {/* About */}
        {/* <About /> */}

    </>
  )
}

export default App;