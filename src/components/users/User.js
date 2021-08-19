export default function User({thisUser}) {
  return (
    <div>
      <h3>{thisUser.id}. {thisUser.name}</h3>
      <hr/>
    </div>
  );
}