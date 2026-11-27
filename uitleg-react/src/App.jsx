import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';



function App() {
   const [number, setNumber] = useState()
   const [book, setBooks] = useState([
      {title: 'book1', author : 'book2'}
      {title: 'book2', author : 'book3'}




   ])
  
   
   
   
   
   
   function changeNumber (){
      setNumber(number + 1)

   }
   
   
   
   return (
     <>
        <h1>Hello, World!</h1>
        
        <h2>het getal is: {number}</h2>
        <button onClick={changeNumber}>Click</button>
       
       <MovieList/>
     
     
     
     </>
     
  );
}

export default App;