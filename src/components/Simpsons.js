import "./Simpsons.css"
export default function Simpsons({name, surname, age, info, photo}) {
  return (
    <div>
        <div className={"simpson"}>
            <h1>{name} {surname}</h1>
            <h2>{age} years</h2>
            <p>{info}</p>
            <img src={photo} alt=""/>
            <hr/>
        </div>
    </div>
  );
}