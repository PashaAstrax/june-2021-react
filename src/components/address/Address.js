import Geo from "../geo/Geo";

export default function Address({address}) {
  return (
    <div>
        <div className={"address"}>
            <h2><i>address: </i></h2>
            <h2>{address.street}, {address.suite}, {address.city}, {address.zipcode}</h2>
            <hr/>

            <Geo geo={address.geo}/>
        </div>
    </div>
  );
}