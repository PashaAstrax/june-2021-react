export default function Post({thisPost, postsFunction}) {
    return (
    <div>
        <h3>{thisPost.id}. {thisPost.title}</h3>
        <button onClick={() => postsFunction(thisPost.body)}>details
        </button>
        <hr/>
    </div>
  );
}