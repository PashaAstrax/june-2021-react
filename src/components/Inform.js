export default function Inform({thisCars, delFunction, patchFunction}) {
    return (
    <div>
        <h4>#{thisCars.id}, <i>"{thisCars.model}",</i> {thisCars.price}$, {thisCars.year} year</h4>
        <button onClick={() => delFunction(thisCars.id)}>delete
        </button>
        <button onClick={() => patchFunction(thisCars.id)}>edit
        </button>
    </div>
  );
}