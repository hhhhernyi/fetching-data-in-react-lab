export default function StarshipCard(props) {
  return (
    <>
      <div className="starshipCards">
        <p>Name: {props.item.name}</p>
        <p>Class: {props.item.starship_class}</p>
        <p>Model: {props.item.model}</p>
        <p>Manufacturer: {props.item.manufacturer}</p>
      </div>
    </>
  );
}
