import { useState, useEffect } from "react";

const PageTimer = () => {
    const [ seconds, setSeconds ] = useState (0);
    useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
   
  
  return <p>je bent al {seconds} seconden op de pagina.</p>;
}
 
export default PageTimer;