
export default function Users({id, name, username, email}) {
  return (
    <div>
        <div className={"users"}>
            <p>id: {id}</p>
            <p>name: "{name}"</p>
            <p>username: "{username}"</p>
            <p>email: "{email}"</p>
        </div>
    </div>
  );
}