import './App.css'
import Navbar from './components/Navbar';
import TextForm from  './components/TextForm';
// import About from './components/About';


function App() {
  return (
    <>
      {/* navbar */}
      <Navbar title="TextUtils" aboutText={"AboutUs"} />

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