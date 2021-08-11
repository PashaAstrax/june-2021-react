import Address from "../address/Address";

export default function User({user}) {
  return (
    <div>
        <div className={"user"}>
            <p>id: {user.id}</p>
            <p>name: "{user.name}"</p>
            <p>username: "{user.username}"</p>
            <p>email: "{user.email}"</p>

            <Address address={user.address}/>
        </div>
    </div>
  );
}