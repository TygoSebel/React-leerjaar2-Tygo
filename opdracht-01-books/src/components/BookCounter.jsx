const BookCounter = ({ count }) => {
  return (
    <h2 className="bookCounter">
      Totaal aantal boeken in de lijst: <strong>{count}</strong>
    </h2>
  );
}

export default BookCounter;