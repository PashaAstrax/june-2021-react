export default function Car({thisCars}) {
  return (
    <div>
        <h4>{thisCars.id}. <i>{thisCars.model}</i>, {thisCars.price}$, {thisCars.year} year</h4>
    </div>
  );
}