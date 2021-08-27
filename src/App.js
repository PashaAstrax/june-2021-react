import {useReducer} from "react";
import reducer from "./reducers/reducer";
import "./App.css"

export default function App() {

    let [{a}, dispatch] = useReducer(reducer,{a: 0});
    // let {a} = state;

    return (
    <div className={"wrap"}>
        <h1><i>object</i> - "{a}"</h1>
        <button onClick={() => dispatch({obj: "1", diya: "+"})}>+10</button>
        <button onClick={() => dispatch({obj: "1", diya: "-"})}>-2</button>
    </div>
  );
};