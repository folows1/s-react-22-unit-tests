import { useState } from "react";
import Output from "./Outpu";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello, world!</h1>

      {changedText ? <Output>Changed!</Output> : <Output>Not Changed!</Output>}

      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting;