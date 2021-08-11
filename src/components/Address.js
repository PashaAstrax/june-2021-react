
export default function Address({address, street, suite, city, zipcode}) {
  return (
    <div>
        <div className={"address"}>
            <p>address: {address}</p>
            <p>street: "{street}"</p>
            <p>suite: "{suite}"</p>
            <p>city: "{city}"</p>
            <p>zipcode: "{zipcode}"</p>
        </div>
    </div>
  );
}