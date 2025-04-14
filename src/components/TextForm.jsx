import { useState } from 'react';


export default function TextForm(props) {
  // convert to uppercase
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  // convert to lowercase
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("on change")
    setText(event.target.value);
  }
  
  const [text, setText] = useState("Enter Text here")
  
  return (
    <>


    <div className="container mx-auto my-3">
      <div className=" w-[90vw] m-auto ">
        <h1 htmlFor="comment" className="px-4 ">{props.heading} </h1>
        <div className="px-2 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <textarea id="comment" rows="6" value={text} onChange={handleOnChange} className="w-full px-0  text-sm text-gray-900  border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="" required ></textarea>
        </div>

          {/* UpperCase */}
      <button onClick={handleUpClick} className="relative inline-flex items-center justify-center p-2 my-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-800 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        Convert to Uppercase
      </button>

        {/* LowerCase */}

        <button onClick={handleLoClick} className="relative inline-flex items-center justify-center p-2 my-3 mx-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-800 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        Convert to LowerCase
      </button>
      
      </div>
    </div>
    
    <div className="container w-[90vw] m-auto ">
      <h1 className="font-bold text-xl">Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h1 className="font-bold text-xl my-5">Preview</h1>
      <p>{text}</p>
    </div>

    </>
  )
}
