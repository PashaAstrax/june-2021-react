import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    let [{a, b, c}, dispatch] = useReducer(reducer,{a: 0, b: 0, c: 0});
    // let {a, b, c} = state;

    return (
    <div className={"wrap"}>
        <h1><i>state #1</i> - "{a}"</h1>
        <button onClick={() => dispatch({obj: "1", diya: "+"})}>+</button>
        <button onClick={() => dispatch({obj: "1", diya: "-"})}>-</button>
        <h1><i>state #2</i> - "{b}"</h1>
        <button onClick={() => dispatch({obj: "2", diya: "+"})}>+</button>
        <button onClick={() => dispatch({obj: "2", diya: "-"})}>-</button>
        <h1><i>state #3</i> - "{c}"</h1>
        <button onClick={() => dispatch({obj: "3", diya: "+"})}>+</button>
        <button onClick={() => dispatch({obj: "3", diya: "-"})}>-</button>
    </div>
  );
};