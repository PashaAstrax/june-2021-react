
export default function Geo({geo}) {
  return (
    <div>
        <div className={"geo"}>
            <h2><i>geo: </i></h2>
            <h2>{geo.lat}, {geo.lng}</h2>
            <hr/>
        </div>
    </div>
  );
}