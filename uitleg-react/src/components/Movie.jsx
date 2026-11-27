const Movie = ({title, author}) => {
  return (
    <section className="movieCard">
      <h2>{title}</h2>
      <h3>{author}</h3>
    </section>
  );
};

export default Movie;
