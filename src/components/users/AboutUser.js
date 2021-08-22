export default function AboutUser({value}) {
  return (
    <div>
        <h4><i>{value.id}. {value.name} - {value.username} ({value.email}), {value.phone}</i></h4>
    </div>
  );
}