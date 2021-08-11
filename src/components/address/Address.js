import Geo from "../geo/Geo";

export default function Address({address}) {
  return (
    <div>
        <div className={"address"}>
            <p>street: "{address.street}"</p>
            <p>suite: "{address.suite}"</p>
            <p>city: "{address.city}"</p>
            <p>zipcode: "{address.zipcode}"</p>

            <Geo geo={address.geo}/>
        </div>
    </div>
  );
}