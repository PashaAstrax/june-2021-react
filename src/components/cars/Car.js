export default function Car({thisCars}) {
  return (
    <div className={"this-cars"}>
        <hr/>
        <h4>{thisCars.id}. <i>{thisCars.model}</i>, {thisCars.price}$, {thisCars.year} year</h4>
        {/*<hr/>*/}
    </div>
  );
}