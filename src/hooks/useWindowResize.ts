import { useEffect, useState } from "react";

function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);
  
  function handleResize() {
    setWindowSize(getSize());
  }
  
   useEffect(() => {
     console.log("useWindowSize mount");
     window.addEventListener("resize", handleResize);
     return () => {
      window.removeEventListener("resize", handleResize);
     }
   }, []); // Empty array ensures that effect is only run on mount and unmount
  
   return windowSize;
}
