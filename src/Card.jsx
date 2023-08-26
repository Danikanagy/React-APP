function Card({ url }) {
  return (
    <div className="card">
      <div className="svg-container">
        <img src={url} />
      </div>

      <h2>Progmatic</h2>

      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
}
export default Card;
