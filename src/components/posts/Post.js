export default function Post({thisPosts}) {
  return (
    <div>

        <h4><i>{thisPosts.id}. {thisPosts.title}</i></h4>
        <h3>- {thisPosts.body}</h3>
        <hr/>
    </div>
  );
}