import "./Product.css"

export default function Product({title, name}) {
    // console.log(props)
    // let {title, name} = props;
    return (
    <div>
        <div className={"myCar"}>
            <h2>{title}</h2>
            <h3>{name}</h3>
            <hr/>
        </div>
    </div>
  );
}