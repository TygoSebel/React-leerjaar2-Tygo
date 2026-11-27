import { useState } from "react";

const Book = ({ title, author, image }) => {
  const [count, setCount] = useState(0);

  return (
    <section className="bookCard">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <img src={image} alt={title} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </section>
  );
};

export default Book;
