import Cap from "./assets/cap.svg";
import Card from "./Card";
function Cards() {
  return (
    <div className="column cards-container">
      <Card url={Cap} />
      <Card url={Cap} />
      <Card url={Cap} />
      <Card url={Cap} />
      <Card url={Cap} />
      <Card url={Cap} />
    </div>
  );
}
export default Cards;
