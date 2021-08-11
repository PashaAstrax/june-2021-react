import Users from "./components/Users";
import Address from "./components/Address";
import Geo from "./components/Geo";

export default function App() {
  return (
    <div>
        <div className={"info"}>
            <Users
                id={1}
                name={"Leanne Graham"}
                username={"Bret"}
                email={"Sincere@april.biz"}
                // address={"street"}
                // street={"Kulas Light"}
            />
            <Address
                address={""}
                street={"Kulas Light"}
                suite={"Apt. 556"}
                city={"Gwenborough"}
                zipcode={"92998-3874"}
            />
            <Geo
                geo={""}
                lat={"-37.3159"}
                lng={"81.1496"}
            />
        </div>
    </div>
  );
}