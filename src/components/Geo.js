
export default function Geo({geo, lat, lng}) {
  return (
    <div>
        <div className={"geo"}>
            <p>geo: {geo}</p>
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
        </div>
    </div>
  );
}