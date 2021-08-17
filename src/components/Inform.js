export default function Inform({thisCars}) {
  return (
    <div>
      <h4>{thisCars.id}. <i>"{thisCars.model}"</i>, {thisCars.price}$, {thisCars.year} year</h4>
        <hr/>
    </div>
  );
}