import { useState, useEffect } from "react";

const DayQuote = () => {
   const [ quote, setQuote ] = useState("");

   const quotes = [
  'Zondag: Rust is ook productiviteit.',
  'Maandag: Een nieuwe week, een nieuwe kans.',
  'Dinsdag: Kleine stappen leiden tot grote resultaten.',
  'Woensdag: Halverwege, blijf doorgaan!',
  'Donderdag: Je bent verder dan je denkt.',
  'Vrijdag: Het weekend is bijna in zicht!',
  'Zaterdag: Geniet van je vrije tijd.',
];
   useEffect(() => {
       const date = new Date().getDay()
       setQuote(quotes[date])
     }, []);

return ( 
    <section>{quote}</section>
 );
}
 
export default DayQuote;