import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutpot";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING!");

  /* useCallback : stores this function object in a space in memory and not to recreate it every time the function component reevaluated, but only when dependancies changes */
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle)
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* useMemo : is used to prevent resorting the array every reevaluatoin of the component function, because items is an array object */}
      <DemoOutput show={showParagraph} items={[1, 5, 3, 4, 3]}/>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
