import Address from "../address/Address";
import Company from "../company/Company";

export default function User({user}) {
  return (
    <div>
        <div className={"user"}>
            <h1>{user.id}. "{user.name} - {user.username}"</h1>
            <hr/>
            <h3>email: "{user.email}"</h3>
            <h3>phone: "{user.phone}"</h3>
            <h3>website: "{user.website}"</h3>
            <hr/>

            <Address address={user.address}/>
            <Company company={user.company}/>
        </div>
    </div>
  );
}