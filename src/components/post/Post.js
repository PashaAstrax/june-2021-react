export default function Post({postS}) {
  return (
    <div>
        {postS.id}.
        <hr/>
        <p>title: {postS.title}</p>
        <p>body: {postS.body}</p>
        <hr/>
    </div>
  );
}