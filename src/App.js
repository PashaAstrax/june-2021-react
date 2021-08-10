import "./App.css"
import Product from "./components/product/Product";

export default function App() {
    return (
    <div className="products">
        <Product title={"Pasha"} name={"Astrax"}/>
        <Product title={"Ira"} name={"Khomenko"}/>

    </div>
  );
}