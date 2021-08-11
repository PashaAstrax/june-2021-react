export default function Company({company}) {
  return (
    <div>
        <div className={"company"}>
            <h2><i>company: </i></h2>
            <h2>{company.name}</h2>
            <h2>{company.catchPhrase}</h2>
            <h2>{company.bs}</h2>
            <hr/>
        </div>
    </div>
  );
}