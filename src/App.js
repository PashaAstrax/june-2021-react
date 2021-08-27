import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    let [{a, b}, dispatch] = useReducer(reducer,{a: 0, b: 0});
    // let {a, b} = state;

    return (
    <div>
        <h1><i>state #1</i> - "{a}"</h1>
        <button onClick={() => dispatch({obj: "1", diya: "+"})}>+</button>
        <button onClick={() => dispatch({obj: "1", diya: "-"})}>-</button>
        <h1><i>state #2</i> - "{b}"</h1>
        <button onClick={() => dispatch({obj: "2", diya: "+"})}>+</button>
        <button onClick={() => dispatch({obj: "2", diya: "-"})}>-</button>
    </div>
  );
};