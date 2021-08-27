const reducer = (state, action) => {
    if (action.obj === "1" && action.diya === "+") {
        return {...state, a: state.a++}
    } else if (action.obj === "1" && action.diya === "-") {
        return {...state, a: state.a--}
    } else if (action.obj === "2" && action.diya === "+") {
        return {...state, b: state.b++}
    } else if (action.obj === "2" && action.diya === "-") {
        return {...state, b: state.b--}
    }
    return {...state};
}
export default reducer;
