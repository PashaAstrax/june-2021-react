export default function Comment({thisComments}) {
  return (
    <div>
        <h4><i>{thisComments.id}. {thisComments.name} ({thisComments.email})</i></h4>
        <h3>- {thisComments.body}</h3>
        <hr/>
    </div>
  );
}