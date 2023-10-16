import React, { useMemo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMOOUTPUT RUNNING!");

  /* useMemo : is used to prevent resorting the array every reevaluatoin of the parent component function */
  const sortedItems = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  })
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput); // avoiding reevaluating of this functional component and it's children
