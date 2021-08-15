export default function Post({thisPost}) {
  return (
    <div>
        <h5><i>- {thisPost.title}</i></h5>
        <h4>"{thisPost.body}"</h4>
        <hr/>
    </div>
  );
}
