export default function Comment({commentS}) {
  return (
    <div>
        <h4>{commentS.id}. {commentS.body}</h4>
    </div>
  );
}