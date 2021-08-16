export default function Comment({thisComment, commentsFunc}) {
  return (
    <div>
        <h3>{thisComment.id}. {thisComment.name}</h3>
        <button onClick={() => commentsFunc(thisComment.body)}>more info</button>
        <hr/>
    </div>
  );
}