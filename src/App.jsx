import Inputfield from "./component/Inputfield"
import ListButton from "./component/ListButton"
import Header from "./component/Header"
import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState("");
  const itemButtons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'];

  const handleClick = (item) => {
    if (item === 'C') {
      setInputValue("");
    }
    else if (item === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch {
        setInputValue(Error);
      }
    }
    else {
      setInputValue(inputValue + item);
    }
  };

  return (
    <>
      <Header />
      <div className=" w-100 h-160 bg-gray-100 flex-col mx-[37%] border rounded-xl ">
        <Inputfield displayValue={inputValue} />
        <ListButton items={itemButtons} onButtonClick={handleClick} />
      </div>
    </>
  )
}

export default App
