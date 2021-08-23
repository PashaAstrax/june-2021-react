export default function PostDetails({location:{state:{body}}}) {
  return (
    <div>
        {
            JSON.stringify(body)
        }
    </div>
  );
}