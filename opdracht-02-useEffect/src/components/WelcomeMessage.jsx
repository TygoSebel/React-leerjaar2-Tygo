import { useState, useEffect } from "react";

const WelcomeMessage = () => {
    const [ message, setMessage ] = useState("")


    useEffect(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      let newMessage = ""
      if (hours <= 12){
        newMessage = "Goedemorgen!"
      }
      if (hours >= 12){
        newMessage = "Goedemiddag"
      }
       if (hours >= 18){
        newMessage = "Goedenavond"
      }

    setMessage(newMessage)
    },[]);
    return (
        <h2>{message}</h2>
     );
}
 
export default WelcomeMessage;