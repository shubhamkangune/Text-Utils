import './App.css'
import Navbar from './components/Navbar';
import TextForm from  './components/TextForm';

function App() {
  return (
    <>
{/* navbar */}
<Navbar title="TextUtils" aboutText="AboutUs"/>

{/* textform */}

<div className="container mx-auto my-3">

<TextForm heading="Enter the text to analyze below" />
</div>

    </>
  )
}

export default App;