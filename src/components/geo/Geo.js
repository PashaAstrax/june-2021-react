export default function Geo({geo}) {
  return (
    <div>
        <div className={"geo"}>
            <p>lat: {geo.lat}</p>
            <p>lng: {geo.lng}</p>
            <hr/>
        </div>
    </div>
  );
}